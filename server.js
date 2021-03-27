// const http = require("http");

// let server = http.createServer((req,res) => {
//     console.log("x", req.url)
//     if (req.url.slice(1) == "Karen") {
//         res.write(`<h1>Hello Karen</h1>`);
//         res.end()
//     }else{
//         res.write(`<h1>ancanot</h1>`);
//         res.end()
//     }
//     res.write(`<h1>Hello node server</h1>`);
//     res.end();
// })

// server.listen(3000,() => console.log("server is running"));


const express = require('express');
const app = express();
app.use(express.json());

const users = [
    {id: 1, name:"Karen", age:24},
    {id: 2, name:"Gexam", age:24},
    {id: 3, name:"Edgar", age:33}
]

let newUers = users.filter

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/users', (req, res) => {
    res.json(users)
})
 
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let user = users.find(elem => elem.id == id);
    if (!user) {
        res.status(404).json({type:"Error", message: "User is not existing"});
        res.end()
    }else{
        res.status(200).json({type: "successfully", result: user});
        res.end();
    }
})

app.delete('/user/:id', (req,res) => {
    let user = users.find(elem => elem.id == id);
    if (!user) {
        res.status(404).json({type:"Error", message: "User is not existing"});
        res.end()
    }
    const index = users.indexOf(user);
    users.splice(index, 1);

    res.send(users);
    
})

app.get('/users/age/:agelimit', (req, res) => {
    const id = parseInt(req.params.agelimit);
    let f = users.filter (elem => elem.age <= id);
    res.json(f);
})

app.put('/updateuser/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let f = users.map(elem => {
        if (elem.id == id) {
            return req.body;
        }
        return elem;
    })
    res.json({message: "User is updated!", result: f});
})
// app.get('/newusers', (req, res) => {
//     users.push(req.body);
//     res.send(users);
// })

app.listen(3000)