let express=require('express');
let bodyparser =  require('body-parser');
let app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

const server=require("./server");
const client=require("./client")(app);

app.use("/api",server);
//app.use("/",client);

app.listen(8000,()=>{
    console.log("Started Development Branch");
})