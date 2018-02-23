let express=require('express');
let router = express.Router();

module.exports = (app)=>{

    router.get("/",(req, res)=>{
        res.send("hello world");
    });

    return router;
}