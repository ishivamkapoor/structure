const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Session=new Schema({
    _id:{type: mongoose.Schema.ObjectId, ref:'Session'},
    userId:{type:mongoose.Schema.ObjectId,ref:'User'},
    token:{type:String},
    startTime:{type:Date,default:Date.now()},
    lastActive:{type:Date,default:Date.now()},
    ipAddress:{type:String},
    logedOut:{type:Date}
});
module.exports=mongoose.model('Session', Session);
