let express=require('express');
let router = express.Router();

const state=require('./route/state');
const user=require('./route/user');

router.use("/state",state);
router.use("/user",user);

module.exports = router;