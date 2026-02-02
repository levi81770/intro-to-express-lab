const e = require('express');
const express = require('express')

const app = express()

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];







// routes

// Exercise 1
app.get('/greetings/username', (req, res) => {
    res.send(`Hello there, ${req.params.username}!`)
})

// Exercise 2
app.get('/roll/num', (req, res) => {
    if (isNaN(req.params.num)) {
        res.send('You must specify a number.')
    } else {
        const roll = Math.floor(Math.random() * req.params.num)
        res.send(`You rolled a ${roll}.`)
    }
})

// Exercise 3
app.get('/collectibles/:index', (req, res) => {
    let index = parseInt(req.params.index);
    if (!collectibles[index]) {
        res.send('This item is not yet in stock. Check back soon!')
    } else {
        res.send(`So, you want the ${collectibles[index].name}? That will be ${collectibles[index].price}.`)
    }
})

// Exercise 4
app.get('/shoes', (req, res) => {
    const minPrice = parseInt(req.query.minPrice)
    const maxPrice = parseInt(req.query.maxPrice)
    const type = req.query.type;
    if (!minPrice && !maxPrice && !type) {
         res.send(shoes)
    }else if (minPrice && !maxPrice && !type) {
        let filteredShoes = shoes.filter(shoe => shoe.price >= minPrice)
        res.send(filteredShoes)
    } else if (!minPrice && maxPrice && !type) {
        let filteredShoes = shoes.filter(shoe => shoe.price <= maxPrice)
        res.send(filteredShoes)
    } else if (!minPrice && !maxPrice && type) {
        let filteredShoes = shoes.filter(shoe => shoe.type === type)
        res.send(filteredShoes)
    } else if (minPrice && maxPrice && !type) {
        let filteredShoes = shoes.filter(shoe => shoe.price >= minPrice && shoe.price <= maxPrice)
        res.send(filteredShoes)
    } else if (minPrice && !maxPrice && type) {
        let filteredShoes = shoes.filter(shoe => shoe.price >= minPrice && shoe.type === type)
        res.send(filteredShoes)
    } else if (!minPrice && maxPrice && type) {
        let filteredShoes = shoes.filter(shoe => shoe.price <= maxPrice && shoe.type === type)
        res.send(filteredShoes)
    } else {
        let filteredShoes = shoes.filter(shoe => shoe.price >= minPrice && shoe.price <= maxPrice && shoe.type === type)
        res.send(filteredShoes)
    } 

})

//listen
app.listen(3000, () => {
    console.log('Listening on port 3000')
})
