const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Company=new Schema({
    _id:{type: mongoose.Schema.ObjectId, ref:'Company'},
    companyName:{type:String},
    address1:{type:String},
    address2:{type:String},
    city:{type:String},
    state:{type:String},
    country:{type:String},
    phoneNo:{type:String},
    mobileNo:{type:String},
    eMail:{type:String},
    panNO:{type:String},
    gsTin:{type:String},
    yearId:{type: mongoose.Schema.ObjectId, ref:'Year'},

});
module.exports=mongoose.model('Company', Company);
