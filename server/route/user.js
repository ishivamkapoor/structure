let express=require('express');
let router = express.Router();


router.get("/",(req, res)=>{res.send("helo user");});
router.get("/create",(req,res)=>{res.send("User create")});

module.exports=router;