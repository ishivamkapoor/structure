const mongoose = require('mongoose');
const State=mongoose.model('State');
const session=require("./session");
const Auth=require('./auth');
const message=require("../security/message");

module.exports={
    addState:(req,res)=>{
        session.checkSession(req).then((check)=>{
            if(check.status==false){
                res.send(check);
            }else{
                Auth.checkUserMasterAuth(req,"StateViewComponent").then((master)=>{
                    if(master){
                        if(master.add==true){
                            let year=new Year();
                            year.financialYear=req.body.financialYear;
                            year.startDate=req.body.startDate;
                            year.endDate=req.body.endDate;
                            year.isActive=req.body.isActive;
                            year.save();
                            res.send(message.returnTrue("Financial Year Created Successfuly"));
                        }else{
                            res.send(message.returnFalse("Unauthorised Use"));
                        }
                    }else{
                        res.send(message.returnFalse("Component Not Found"));
                    }
                });
            }
        });

    },
    editState:(req,res)=>{
        session.checkSession(req).then((check)=>{
            if(check.status==false){
                res.send(check);
            }else{
                Auth.checkUserMasterAuth(req,"StateViewComponent").then((master)=>{
                    if(master){
                        if(master.edit==true){
                            let state=State.findOne({stateName:req.body.stateName},(err,state)=>{
                                state.stateName=req.body.stateName;
                                state.stateCode=req.body.stateCode;
                                state.isActive=req.body.isActive
                                state.save();
                                res.send(message.returnTrue("State Edited Successfuly"));
                            });

                        }else{
                            res.send(message.returnFalse("Unauthorised Use"));
                        }
                    }else{
                        res.send(message.returnFalse("Component Not Found"));
                    }
                });
            }
        });
    },
    deleteState:(req,res)=>{
        session.checkSession(req).then((check)=>{
            if(check.status==false){
                res.send(check);
            }else{
                Auth.checkUserMasterAuth(req,"StateViewComponent").then((master)=>{
                    if(master){
                        if(master.delete==true){
                            let state=State.findOne({stateName:req.body.stateName},(err,state)=>{
                                state.isActive=false;
                                state.save();
                                res.send(message.returnTrue("State Deactivated Successfuly"));
                            });
                        }else{
                            res.send(message.returnFalse("Unauthorised Use"));
                        }
                    }else{
                        res.send(message.returnFalse("Component Not Found"));
                    }
                });
            }
        });
    }
}