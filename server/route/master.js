let express=require("express");
let router=express.Router();
let message=require("./../security/message");
const masterController=require("./../controller/master");

router.get("/",(req,res)=>{res.send("Hello Master")});
router.post("/add",masterController.addMaster);

module.exports=router;