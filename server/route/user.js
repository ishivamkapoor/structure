let express=require('express');
let router = express.Router();


router.get("/",(req, res)=>{res.send("helo user");});

module.exports=router;