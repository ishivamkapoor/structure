let express=require('express');
let router = express.Router();
let userController= require("./../controller/user");
let message=require("./../security/message");

router.get("/",(req, res)=>{res.send("helo user");});
router.post("/create",userController.create);
router.post("/check",(req,res)=>{
    if(userController.checkIfExists(req.body.username)){
        res.send(message.returnTrue("User Exists"));
    }else{
        res.send(message.returnFalse("User does nou Exists"));
    }
});

module.exports=router;