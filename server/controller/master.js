const mongoose=require('mongoose');
const Master=mongoose.model("Master");
const message=require("./../security/message");

var run={
    addMaster:(req,res)=>{
        run.checkIfExists(req).then((status)=>{
            if(status){
                let master= new Master();
                master.menuName=req.body.menuName;
                master.componentName=req.body.componentName;
                master.isActive=req.body.isActive;

                if(master.save()){
                    res.send(message.returnTrue(master));
                }else{
                    res.send(message.returnFalse("Error occured"));
                }
            }else{
                res.send(message.returnFalse("Already Exisits"));
            }
        })

    },
    checkIfExists:(req)=>{
        return new Promise(resolve=>{
            let master=Master.findOne({componentName:req.body.componentName},(err,menu)=>{
                console.log(menu);
                if(menu!=null){
                    resolve(false);
                }else{
                    resolve(true);
                }
            })
        });
    }
}
module.exports=run;