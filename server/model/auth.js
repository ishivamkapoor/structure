const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UseAuth=new Schema({
    _id:{type: mongoose.Schema.ObjectId, ref:'Session'},
    userId:{type:mongoose.Schema.ObjectId,ref:'User'},
    companyId:{type:mongoose.Schema.ObjectId,ref:'Company'},
    masterId:{type:mongoose.Schema.ObjectId,ref:'Master'},
    view:{type:Boolean},
    add:{type:Boolean},
    edit:{type:Boolean},
    delete:{type:Boolean}
});
