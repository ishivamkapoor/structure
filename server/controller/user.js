const mongoose = require('mongoose');
const User=mongoose.model("User");
const session=require("./session");
const validations=require("../security/validations");
const encryption=require("../security/encryption");
const message=require("../security/message");
module.exports={

    create:async(req,res)=>{
        let user=new User();

        //VALIDATE USERNAME
        if(validations.minChar(req.body.username,8) && validations.maxChar(req.body.username,16)){
            user.username=req.body.username;
        }else { return message.returnFalse("Invalid Username")}
        //VALIDATE PASSWORD
        if(validations.minChar(req.body.password,8) && validations.maxChar(req.body.password,16)){
            user.password=encryption.encrypt(req.body.password);
        }else { return message.returnFalse("Invalid Password")}
        //VALIDATE FIRST NAME
        if(validations.minChar(req.body.fName,1) && validations.maxChar(req.body.fName,16)){
            user.fName=req.body.fName
        }else { return message.returnFalse("Invalid First Name")}
        //VALIDATE LAST NAME
        if(validations.minChar(req.body.lName,1) && validations.maxChar(req.body.lName,16)){
            user.lName=req.body.lName
        }else { return message.returnFalse("Invalid Last Name")}
        //VALIDATE EMAIL
        if(validations.emailValidate(req.body.eMail,1)){
            user.eMail=req.body.eMail
        }else { return message.returnFalse("Invalid eMail")}
        //VALIDATE PHONE NO
        if(validations.minChar(req.body.phoneNo,10) && validations.maxChar(req.body.phoneNo,10)){
            user.phoneNo=req.body.phoneNo
        }else { return message.returnFalse("Invalid Phone No")}

        user.isActive=true;
        user.save();

        return message.returnTrue({userId:user._id,reply:"User created Successfully"});
    },
    login:async(req,res)=>{
        let user= User.findOne({username:req.body.username});
        if(user){
            if(user.password==encryption.encrypt(req.body.password)){

                return message.returnTrue({session:session.createSession(req),reply:"Logged In Successfully"})
            }else {
                return message.returnFalse("Invalid Password")
            }
        }else {
            return message.returnFalse("Invalid Username")
        }
    },
    edit:async(req,res)=>{

    },
    checkIfExists:async(username)=>{
        let user= User.findOne({username:username});
        if(user){
            return true;
        }else {
            return false;
        }
    },
}