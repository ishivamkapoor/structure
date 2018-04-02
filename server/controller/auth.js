const mongoose = require('mongoose');
const auth=mongoose.model("Auth");

module.exports={
    getUserMenu:async(req,res)=>{
        let authMenu= auth.find({userId:req.session.userId},(err,data)=>{

        });

    },
    checkUserMasterAuth:(req,master)=>{
        return new Promise((resolve)=>{
            let authMenu= auth.findOne({userId:req.session.userId,masterComponent:master},(err,data)=>{
                if(data==null){
                    resolve(false);
                }else{
                    resolve(data);
                }
            });
        });
    }
}