const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User=new Schema({
    //_id:{type: mongoose.Schema.ObjectId, ref:'User'},
    financialYear:{type:String,trim:true},
    startDate:{type:Date,default:  Date.now()},
    endDate:{type:Date,default:  Date.now()},
    isActive:{type:Boolean}
});
module.exports=mongoose.model('User', User);
