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
    checkSession: (req)=>{
        console.log(req.session.userId);
        return new Promise((resolve)=>{
            let session = Session.findOne({token:req.session.token,userId:req.session.userId},(err,session)=>{
                if(session){
                    console.log(session);
                    if(session.logedOut){

                        resolve(message.returnFalse("You have already Logged Out Login Again"));
                    }
                    //console.log( Date(new Date().toISOString()).getHours());
                    //var d = new Date(session.lastActive);
                    //var n = d.getHours();
                    console.log(Date.now());
                    console.log(session.lastActive);
                    console.log(Date.parse(session.lastActive));
                    difference_ms=Date.now()-session.lastActive;
                    difference_ms = difference_ms/1000;
                    difference_ms = difference_ms/60;
                    var minutes = difference_ms;
                    console.log(minutes);
                    if(minutes>60){
                        session.logedOut=true;
                        session.save();
                        resolve (message.returnFalse("You have already Logged Out Login Again"));
                    }
                    session.lastActive=new Date().toISOString();
                    session.save();
                    resolve(message.returnTrue("Session Active")) ;
                }else{
                    resolve( message.returnFalse("Please Login"));
                }
            });
        });
    }
}