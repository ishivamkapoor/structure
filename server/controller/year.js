const mongoose = require('mongoose');
const Year=mongoose.model("Year");
const Auth=require('./auth');
const session=require("./session")
const message=require("../security/message");

module.exports={
    getAllYears:(req,res)=>{
        session.checkSession(req).then((check)=> {
            if (check.status == false) {
                res.send(check);
            } else {
                Auth.checkUserMasterAuth(req,"FinancialYearViewComponent").then((master)=>{
                    if(master){
                        if(master.view==true) {
                            let years=Year.find({isActive:true},(data)=>{
                                if(data){
                                    res.send(message.returnTrue(data));
                                }else {
                                    res.send(message.returnFalse("No Financial Years Available"));
                                }
                            });
                        }
                    }
                });
            }
        });
    },
    addYear:(req,res)=>{
        session.checkSession(req).then((check)=>{
            if(check.status==false){
                res.send(check);
            }else{
                Auth.checkUserMasterAuth(req,"FinancialYearViewComponent").then((master)=>{
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
    editYear:(req,res)=>{
        session.checkSession(req).then((check)=>{
            if(check.status==false){
                res.send(check);
            }else{
                Auth.checkUserMasterAuth(req,"FinancialYearViewComponent").then((master)=>{
                    if(master){
                        if(master.edit==true){
                            let year=Year.findOne({financialYear:req.body.financialYear},(err,year)=>{
                                year.financialYear=req.body.financialYear;
                                year.startDate=req.body.startDate;
                                year.endDate=req.body.endDate;
                                year.isActive=req.body.isActive;
                                year.save();
                                res.send(message.returnTrue("Financial Year Updated Successfuly"));
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
    deleteYear:(req,res)=>{
        session.checkSession(req).then((check)=>{
            if(check.status==false){
                res.send(check);
            }else{
                Auth.checkUserMasterAuth(req,"FinancialYearViewComponent").then((master)=>{
                    if(master){
                        if(master.delete==true){
                            let year=Year.findOne({financialYear:req.body.financialYear},(err,year)=>{
                                year.isActive=false;
                                year.save();
                                res.send(message.returnTrue("Financial Year Deactivated Successfuly"));
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