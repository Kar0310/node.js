const path = require("path");
const fs = require("fs");
const {v4: uuidv4 } = require("uuid");
const { resolve } = require("path");
const { reject } = require("underscore");

class Pizza{
    constructor(name, price, type, size){
        this.name = name;
        this.price = price;
        this.type = type;
        this.size = size;
        this.id = uuidv4()
    }
    getPizza(){
        return {
        name: this.name,
        price: this.price,
        type: this.type,
        size: this.size,
        id: this.id
        }
    }
    async save(){
        const pizzas = await Pizza.getAll();
        pizzas.push(this.getPizza())
        return new Promise((resolve, reject) =>{
            fs.writeFile(
                path.join(__dirname, "..", "data", "pizza.json"),
                JSON.stringify(pizzas, null, 2),
                (err) => {
                    if (err) reject(err);
                    resolve();
                }
            )
        })

    }

    static getAll(){
        return new Promise((resolve, reject) =>{
            fs.readFile(
                path.join(__dirname, "..", "data", "pizza.json"),
                "utf8", (err,file) => {
                    if (err) reject(err);
                    resolve(JSON.parse(file))
                }
            )
        })
    }
}

module.exports = Pizza;