const express = require('express');
const router = express.Router();
const Pizza = require("../models/pizza")
const fs = require("fs");
const path = require("path");


// const pizza = [
//     {
//         id: 1,
//         name: "Tashir",
//         count: 5,
//         price: 480,
//         total(){
//             return this.price * this.count
//         }
//     }
// ]

// applicationCache.get('/home', function(req,res){
//     res.send(pizza);
// })

// router.put('/pizza/update/ :id', function(req,res){
//     let id = + req.params.id;
//     const {count, price} = req.body;
//     let p = pizza.find(elem => elem.id = id)
//     if (!p) res.json({message: "Pizza was not found"});
//     else{
//         p.price = price;
//         p.count = count;
//         res.send(pizza);
//     }
// })


// module.exports = router;








router.get("/all", async(req, res) => {
    try{
        const allPizza = await Pizza.getAll();
        res.json(allPizza);
    }
    catch(err){
        res.json({err});
    }
})

router.post("/add", async(req, res) => {
    const {name, price, type, size} = req.body;
    try{
        let newPizza = await new Pizza(name, price, type, size);
        await newPizza.save();
        res.json({ massage: "Saved!"})
    }
    catch(err){
        res.json({err});
    }
})

module.exports = router;