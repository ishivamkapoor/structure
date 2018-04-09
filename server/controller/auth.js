const mongoose = require('mongoose');
const Auth=mongoose.model("UseAuth");
const Master=mongoose.model("Master");
const session=require("./session");
const message=require("../security/message");

obj={
    getUserMenu:async(req,res)=>{
        if(req.session.userId){
            if(req.session.companyId){
                let authMenu=Auth.find({companyId:res.session.companyId,userId:req.session.userId},(err,menu)=>{
                    res.send(message.returnTrue(menu));
                })
            }else{
                let authMenu=Master.find({toLoggedIn:true},(err,menu)=>{
                    res.send(message.returnTrue(menu));
                })
            }
        }else{
            let authMenu=Master.find({toGuest:true},(err,menu)=>{
                res.send(message.returnTrue(menu));
            })
        }
    },
    checkUserMasterAuth:(req,master)=>{
        return new Promise((resolve)=>{
            let authMenu= Auth.findOne({userId:req.session.userId,masterComponent:master},(err,data)=>{
                if(data==null){
                    resolve(false);
                }else{
                    resolve(data);
                }
            });
        });
    },
    giveUserMasterAuth:(req,res)=>{
        session.checkSession(req).then((check)=>{
            if(check.status==false){
                res.send(check);
            }else{
                obj.checkUserMasterAuth(req,"MasterAuthPermissionViewEditComponent").then((permission)=>{
                   if(permission && permission.edit){
                       let auth= new Auth();
                       auth.userId=req.body.userId;
                       auth.companyId=req.session.companyId;
                       auth.masterComponent=req.body.masterComponent;
                       auth.view=req.body.view;
                       auth.add=req.body.add;
                       auth.edit=req.body.edit;
                       auth.delete=req.body.delete;
                       auth.save();
                       res.send(message.returnTrue("Perssion Ediited Successfully"))
                   }else{
                       res.send(message.returnFalse("Unauthorised Use"));
                   }
                });
            }
        });
    }
}
module.exports=obj;