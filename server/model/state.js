const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let State = new Schema({
    _id:{type: mongoose.Schema.ObjectId, ref:'State'},
    stateCode:{type:String,required:true,trim:true},
    stateName:{type:String,required:true,trim:true},
    isActive:{type:Boolean}
    });

module.exports=mongoose.model('State', State);