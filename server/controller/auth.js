const mongoose = require('mongoose');
const auth=mongoose.model("Auth");

module.exports={
    getUserMenu:async(req,res)=>{
        let authMenu= auth.find({userId:req.session.userId},(err,data)=>{

        });

    }

}