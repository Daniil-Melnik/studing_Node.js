const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('This is homePage')
})

app.get('/about', (req, res) => {
    res.send('about us')
})

app.get('/user/:name/:id', (req, res) => {
    res.send(`user id: ${req.params.id}  name: ${req.params.name}`)
})

app.listen(3001, () => {
    console.log('Server started: http://localhost:3001')
})