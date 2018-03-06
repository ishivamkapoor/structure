const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Session=new Schema({
    _id:{type: mongoose.Schema.ObjectId, ref:'Session'},
    userId:{type:mongoose.Schema.ObjectId,ref:'User'},
    token:{type:String},
    startTime:{type:Date,default: new Date().toISOString()},
    lastActive:{type:Date,default:new Date().toISOString()},
    ipAddress:{type:String},
    logedOut:{type:Boolean}
});
module.exports=mongoose.model('Session', Session);
