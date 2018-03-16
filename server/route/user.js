let express=require('express');
let router = express.Router();
let userController= require("./../controller/user");
let message=require("./../security/message");

router.get("/",(req, res)=>{res.send("helo user");});
router.post("/create",userController.create);
router.post("/check",userController.checkIfExists);
router.post("/login",userController.login);
router.post("/edit",userController.edit);

module.exports=router;