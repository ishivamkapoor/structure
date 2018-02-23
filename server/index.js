let express=require('express');
let router = express.Router();

module.exports = (app)=>{

    router.use("/state",require('./route/state'));
    router.use("/user",require('./route/user'));

    return router;
}