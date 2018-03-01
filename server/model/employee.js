const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employee=new Schema({
    _id:{type: mongoose.Schema.ObjectId, ref:'Employee'},
    userId:{type: mongoose.Schema.ObjectId, ref:'Employee'},
    _id:{type: mongoose.Schema.ObjectId, ref:'Employee'},
    isActive:{type:Boolean}
});
