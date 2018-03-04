const crypto = require('crypto');
const mongoose = require('mongoose');
const Session=mongoose.model("Session");
const encryption=require("../security/encryption");
module.exports={
    createSession: async(req)=>{
        var time= new Date();
        let session = Session.findOne({userId:req.body.username});
        if(!session){
            session=new Session();
        }
        session.token=encryption.token();
        session.startTime=time.toISOString();
        session.lastActive=time.toISOString();
        session.ipAddress=req.body.ipAddress;
        session.logedOut=false;
        session.save();

        return session;
    },
    checkSession: async(req,res)=>{
        var time= new Date();
        let session = Session.findOne({userId:req.body.username});
        if(session){

        }
    }
}