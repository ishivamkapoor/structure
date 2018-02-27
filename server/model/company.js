const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Company=new Schema({
    _id:{type: mongoose.Schema.ObjectId, ref:'Comapny'},
    companyName:{type:String},
    yearId:{type: mongoose.Schema.ObjectId, ref:'Year'},

});
