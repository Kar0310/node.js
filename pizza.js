const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

    



app.get("/home", function(req,res){
    res.sendFile(__dirname, "views", "index.html")
})





app.listen(3000, () => console.log("server is running"));