let express=require('express');
let router = express.Router();
let path=require('path');

module.exports = (app)=>{

    app.use(express.static(__dirname+'/dist'));
    router.get("*",(req, res)=>{
        res.sendFile(path.join(__dirname+'/dist/index.html'))
    });

    return router;
}