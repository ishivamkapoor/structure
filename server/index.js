let express=require('express');
let router = express.Router();

const state=require('./route/state');
const user=require('./route/user');
const auth=require('./route/auth');
const year=require('./route/year');
const employee=require('./route/employee');

//IGNORE UPLOAD
const master=require('./route/master');

router.use("/state",state);
router.use("/user",user);
router.use("/year",year);
router.use("/auth",auth);
router.use("/employee",employee);

//IGNORE UPLOAD
router.use("/master",master);

module.exports = router;