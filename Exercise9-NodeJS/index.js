// if one file is not in our local we need to write without './' to call.
const express = require("express"); 
const app = express();
const port = 8080;


app.use((req,resp,next)=>{
    resp.send("Hello World");
    next();
});
app.listen(port, ()=>{
    console.log("App started at 8080");
});

