const express = require('express');
const router = express.Router();
const registration = express.Router();
const user_data = require('../registration/schema');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');
const verify=require('../access/userAccess')
const admin_verify=require('../access/adminAccess')



router.post('/user/signup', async(req, res)=> {
    const { name, phone_no, email, password } = req.body;
   

    try {

        let email_check=await user_data.findOne({email});
        if(email_check){
      
            res.status(203).json({mess:"user already registed"})
        }else{

            
            let data=new user_data({
                name,phone_no,email,password
            })

            data.password=await bcrypt.hash(password,12);
            let result=await data.save();

            if(result) res.status(201).send(result.name)
            else res.status(400).send()
        }


    }catch(e){
        res.status(400).send(e)
    }
})




router.post('/user/signin',async(req, res)=> {
    const {email, password } = req.body;
    

    try {

        let email_check=await user_data.findOne({email});
        if(email_check){
            let result=await bcrypt.compare(password,email_check.password)
            if(result){
                
                let token_data=await jwt.sign({id:email_check._id},process.env.token);
                
               if(token_data){
                res.cookie("accessToken",token_data, {
                    expiresIn: '2h',
                    httpOnly: true
                });
               }
               
               
                res.status(200).send(email_check.name)
            }
            else res.status(400).send()
        }else{
            res.status(400).json({mess:"user not registed"})
           
        }


    }catch(e){
        res.status(400).send()
    }
})


router.get('/check_user',verify,async(req,res)=>{
    try{
        
        let data=await user_data.findOne({_id:req.dataFromMiddleware1})
        
        res.status(200).send(data.name)
    }catch(e){
        res.status(400).send(e);
    }
   

})

router.post('/admin/signin',async(req,res)=>{
      try{
         const {email,password}=req.body;
         if(email=='pavanconsultancy5655@gmail.com'&& password=='672576726615'){
            let token_data=await jwt.sign({id:email},process.env.token);
                
            if(token_data){
             res.cookie("accessToken",token_data, {
                 expiresIn: '2h',
                 httpOnly: true
             });
            }

            res.status(200).send('Pavan')
         }else{
            res.status(400).send("Wrong password")
         }
      }catch(e){
        res.status(400).send()
      }
})


router.get('/check_admin',admin_verify,async(req,res)=>{
    try{
        res.status(200).send("login successful")
    }catch(e){
        res.status(400).send(e);
    }
   

})


router.post('/logout',async(req,res)=>{

    try{
          res.clearCookie('accessToken')
       
            res.cookie('accessToken',"#none", {
               httpOnly:false
            });
            res.clearCookie('accessToken')
            res.cookie('accessToken',"#none", {
                httpOnly:false
             });
            res.send()
    }catch(e){

        res.status(400).send()
    }
   
   
})




module.exports = router;