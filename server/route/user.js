let express=require('express');
let router = express.Router();

module.exports=()=>{
    router.use("/",(req, res)=>{
        res.send("helo user");
    });
}