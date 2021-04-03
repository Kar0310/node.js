const express = require('express');
const path = require('path');
const app = express();
const pizzarouter = require("./routes/pizza")
app.use(express.json());


app.use("/pizza", pizzarouter)

app.get("/home", function(req,res){
    res.sendFile(__dirname, "views", "index.html")
})





app.listen(3000, () => console.log("server is running"));