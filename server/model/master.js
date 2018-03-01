const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Master=new Schema({
    _id:{type: mongoose.Schema.ObjectId, ref:'Master'},
    componentName:{type:String},
    isActive:{type:Boolean}
});
