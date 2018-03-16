const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User=new Schema({
    //_id:{type: mongoose.Schema.ObjectId, ref:'User'},
    username:{type:String,trim:true},
    password:{type:String,trim:true},
    fName:{type:String,trim:true},
    lName:{type:String,trim:true},
    eMail:{type:String,trim:true},
    phoneNo:{type:String,trim:true},
    avatar:{type:String,trim:true},
    isActive:{type:Boolean}
});
module.exports=mongoose.model('User', User);
