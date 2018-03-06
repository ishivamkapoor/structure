let express=require('express');
let bodyparser =  require('body-parser');
let app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

const serverConnection=require("./server/connection");
const modelsInitialize=require("./server/model");
serverConnection();
modelsInitialize();

const server=require("./server");
const client=require("./client")(app);




app.use("/api",server);
//app.use("/",client);

app.listen(8000,()=>{
    console.log("Started Development Branch");
})