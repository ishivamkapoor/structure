module.exports=(app)=>{
    require("./session");
    require("./user");
    require("./auth");
    require("./master");
    require("./year");
    require("./company");
    require("./employee");
    require("./state");
    console.log("Model Set");
    return app;
}