let express=require('express');
let router = express.Router();
let message=require("./../security/message");
const authController=require("./../controller/auth");

router.get("/",(req, res)=>{res.send("helo user");});
router.post("/menu",authController.getUserMenu);
router.post("/authorize",authController.giveUserMasterAuth);

module.exports=router;