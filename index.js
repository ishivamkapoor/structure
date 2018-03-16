let express=require('express');
let session = require('express-session');

let bodyparser =  require('body-parser');
let app=express();

app.use(session({secret: 'structure'}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

const serverConnection=require("./server/connection");
const modelsInitialize=require("./server/model");
serverConnection();
modelsInitialize(app);

const server=require("./server");
const client=require("./client")(app);




app.use("/api",server);
//app.use("/",client);

app.listen(8000,()=>{
    console.log("Started Development Branch");
})