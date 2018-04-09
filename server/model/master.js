const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Master=new Schema({

    menuName:{type:String,trim:true},
    componentName:{type:String,unique : true, required : true, dropDups: true},
    toGuest:{type:Boolean},
    toLoggedIn:{type:Boolean},
    isActive:{type:Boolean}
});
module.exports=mongoose.model('Master', Master);