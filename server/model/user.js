const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User=new Schema({
    //_id:{type: mongoose.Schema.ObjectId, ref:'User'},
    username:{type:String},
    password:{type:String},
    fName:{type:String},
    lName:{type:String},
    eMail:{type:String},
    phoneNo:{type:String},
    avatar:{type:String},
    isActive:{type:Boolean}
});
module.exports=mongoose.model('User', User);
