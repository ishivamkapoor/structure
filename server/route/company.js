let express=require('express');
let router = express.Router();

let message=require("./../security/message");

router.get("/",(req, res)=>{res.send("helo user");});


module.exports=router;