const mongoose = require('mongoose');
const Session=mongoose.model("Session");
const encryption=require("../security/encryption");
const message=require("../security/message");

module.exports={
    createSession:(userId,ip)=>{
        return new Promise((resolve)=>{
            let time= Date.now();
            let session = Session.findOne({userId:userId},(err,session)=>{

                if(session ==null){
                    console.log(session);
                    session=new Session();
                }
                session.userId=userId;
                session.token=encryption.token();
                session.startTime=time;
                session.lastActive=time;
                session.ipAddress=ip;
                session.logedOut=false;
                session.save();

                resolve(session);
            });
        });
    },
    checkSession: (req,res)=>{

        let session = Session.findOne({token:req.session.token});
        if(session){
            if(session.logedOut){
                res.send(message.returnFalse("You have already Logged Out Login Again"));
                return;

            }
            if(new Date(Date.now()-session.lastActive).getHours() >= 1){
                session.logedOut=true;
                session.save();

                res.send(message.returnFalse("You have already Logged Out Login Again"));
                return;
            }
            session.lastActive=new Date.now();
            session.save();

            res.send(message.returnTrue("Session Active"));
        }else{
            res.send(message.returnFalse("Please Login"));
        }
    }
}