const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/user/:name', (req, res) => {
    res.render('user', {username : req.params.name})
})

app.listen(3001, () => {
    console.log('Server started: http://localhost:3001')
})