const express = require('express')

const app = express()









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


//listen
app.listen(3000, () => {
    console.log('Listening on port 3000')
})
