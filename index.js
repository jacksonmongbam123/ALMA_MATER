const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;

app.get("/", function(req, res){
    res.send("Welcome to ALMA MATER");
})

app.listen(PORT, function(){
    console.log("listening to port 5000");
})