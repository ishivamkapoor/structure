let express=require('express');
let router = express.Router();

module.exports=()=>{
    router.get("/",(req, res)=>{
        res.send("helo state");
    });
}