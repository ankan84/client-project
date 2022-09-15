const mongoose=require('mongoose');
const url=process.env.database;
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}).then((res)=>{
    console.log("successful")
}).catch((e)=>{
    console.log("unsuccessful")

})








