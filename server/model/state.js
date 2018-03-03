const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let State = new Schema({
    _id:{type: mongoose.Schema.ObjectId, ref:'State'},
    state_code:{type:String,required:true,trim:true},
    state_name:{type:String,required:true,trim:true}
},{
    timestamps: true,
    versionKey: false
})

module.exports=mongoose.model('State', State);