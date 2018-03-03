const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employee=new Schema({
    _id:{type: mongoose.Schema.ObjectId, ref:'Employee'},
    userId:{type: mongoose.Schema.ObjectId, ref:'User'},
    companyId:{type: mongoose.Schema.ObjectId, ref:'Company'},
    isAdmin:{type: Boolean},
    isActive:{type:Boolean}
});
module.exports=mongoose.model('Employee', Employee);