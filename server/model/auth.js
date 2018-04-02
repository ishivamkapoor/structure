const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UseAuth=new Schema({
    _id:{type: mongoose.Schema.ObjectId, ref:'UseAuth'},
    userId:{type:mongoose.Schema.ObjectId,ref:'User'},
    companyId:{type:mongoose.Schema.ObjectId,ref:'Company'},
    masterComponent:{type:String},
    view:{type:Boolean},
    add:{type:Boolean},
    edit:{type:Boolean},
    delete:{type:Boolean}
});
module.exports=mongoose.model('UseAuth', UseAuth);