let mongoose = require('mongoose');

mongoose.Promise=global.Promise;
module.exports=()=>{
    mongoose.connect("mongodb://localhost:27017/structure");
    mongoose.connection.on('connected', ()=> {
        console.log('Mongoose default connection open to green');
    });

    mongoose.connection.once('open',()=> {
        console.log('Connected to mongodb! green');
    });

    mongoose.connection.on('error', (err)=> {
        console.error('Mongoose default connection error: ' + err+' red ');
    });

    mongoose.connection.on('disconnected', ()=> {
        console.log('Mongoose default connection disconnected');
    });

}
