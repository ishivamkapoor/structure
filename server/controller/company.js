const mongoose=require("mongoose");
const Company=mongoose.model("Company");

module.exports={
    createCompany:async (req,res)=>{
        let company=new Company();
        if(validations.minChar(req.body.username,8) && validations.maxChar(req.body.username,16)){
            user.username=req.body.username;
        }else { res.send(message.returnFalse("Invalid Username"));return; }
    }
}