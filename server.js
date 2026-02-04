
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
app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there, ${req.params.username}!`)
})

// Exercise 2
app.get('/roll/:num', (req, res) => {
    if (isNaN(req.params.num)) {
        res.send('You must specify a number.')
    } else {
        const num = Number(req.params.num)
        const roll = Math.floor(Math.random() * (num + 1))
        res.send(`You rolled a ${roll}.`)
    }
})

// Exercise 3
app.get('/collectibles/:index', (req, res) => {
    let index = parseInt(req.params.index);
    if (!collectibles[index]) {
        res.send('This item is not yet in stock. Check back soon!')
    } else {
        res.send(`So, you want the ${collectibles[index].name}? That will be $${collectibles[index].price}.`)
    }
})

// Exercise 4
app.get('/shoes', (req, res) => {
    const minPrice = Number(req.query['min-price'])
    const maxPrice = Number(req.query['max-price'])
    const type = req.query.type;

    let filteredShoes = shoes;
    if (minPrice) filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice)
    if (maxPrice) filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice)
    if (type) filteredShoes = filteredShoes.filter(shoe => shoe.type === type)

    res.send(filteredShoes)
})

//listen
app.listen(3000, () => {
    console.log('Listening on port 3000')
})
