const express=require('express');
const jwt=require('jsonwebtoken');
const admin_verify= async function(req,res,next){

    try{
       let token=req.cookies.accessToken;
    
       
       
       let result= await jwt.verify(token,process.env.token);
    
       if(result){
        
        next();
        }

    }catch(e){
        res.status(400).send(e)
    }
  
   
   

}


module.exports=admin_verify;
