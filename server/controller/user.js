const mongoose = require('mongoose');
const User=mongoose.model("User");
const session=require("./session");
const validations=require("../security/validations");
const encryption=require("../security/encryption");
const message=require("../security/message");
module.exports={

    create:async(req,res)=>{
        let user=new User();
        // if(this.checkIfExists(req.body.username)){
        //     res.send(message.returnFalse("Username already registered"));
        //     return;
        // }
        console.log(req.body.username);
        //VALIDATE USERNAME
        if(validations.minChar(req.body.username,8) && validations.maxChar(req.body.username,16)){
            user.username=req.body.username;
        }else { res.send(message.returnFalse("Invalid Username"));return; }
        //VALIDATE PASSWORD
        if(validations.minChar(req.body.password,8) && validations.maxChar(req.body.password,16)){
            user.password=encryption.encrypt(req.body.password);
        }else { res.send(message.returnFalse("Invalid Password"));return;  }
        //VALIDATE FIRST NAME
        if(validations.minChar(req.body.fName,1) && validations.maxChar(req.body.fName,16)){
            user.fName=req.body.fName
        }else { res.send(message.returnFalse("Invalid First Name"));return; }
        //VALIDATE LAST NAME
        if(validations.minChar(req.body.lName,1) && validations.maxChar(req.body.lName,16)){
            user.lName=req.body.lName
        }else { res.send(message.returnFalse("Invalid Last Name"));return; }
        //VALIDATE EMAIL
        if(validations.emailValidate(req.body.eMail)){
            user.eMail=req.body.eMail
        }else { res.send(message.returnFalse("Invalid eMail"));return; }
        //VALIDATE PHONE NO
        if(validations.minChar(req.body.phoneNo,10) && validations.maxChar(req.body.phoneNo,10)){
            user.phoneNo=req.body.phoneNoh
        }else { res.send(message.returnFalse("Invalid Phone No"));return; }

        user.isActive=true;
        user.save();

        res.send(message.returnTrue({userId:user._id,reply:"User created Successfully"}));
    },
    login:async(req,res)=>{
        var ip = "192.168.2.1";
        let user= User.findOne({username:req.body.username},(err,user)=>{
            if(user){
                if(user.password==encryption.encrypt(req.body.password)){
                    var sessData = req.session;
                  //  console.log(ip);
                    session.createSession(user._id,ip).then((data)=>{
                        sessData.username=user.username;
                        sessData.token =data.token;
                        res.send(message.returnTrue("Logged In Successfully"));
                    });

                }else {
                    res.send(message.returnFalse("Invalid Password"));
                }
            }else {
                res.send(message.returnFalse("Invalid Username"));
            }
        });
    },
    edit:async(req,res)=>{
        //var sessData = req.session;
        //console.log(session.checkSession(req,res));
        //res.send(message.returnTrue("Edit"));
    },
    checkIfExists:async (req,res)=>{
        let user= await User.findOne({username:req.body.username},(err,user)=>{
            if(user){
                res.send(message.returnTrue("User Exists"));
            }else{
                res.send(message.returnFalse("User does not Exists"));
            }
        });
    },
}