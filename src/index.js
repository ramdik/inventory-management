const express = require("express")
const dotenv = require("dotenv");
const knex = require("../db/db")

const app = express()

//initialize and use .env file
dotenv.config()

const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.send("Hello World")
});

app.post("/products", (req,res) => {
    knex("products")
    .insert({
        name: "Makanan",
        price: 1351222,
        description: "Mie Aceh kering pakai daging"
    })
    .then(() =>{
        knex
        .select()
        .from("products")
        .then((products) => {
            res.send(products);
        });
    });
});

app.put("/products", (req, res) => {

})

// methode get == show data knex js
app.get("/products", async (req,res) => {
    let products = await knex.select().from("products")
    res.json(products)
})

app.listen(PORT, () => {
    console.log("express API running in port:", PORT)
})