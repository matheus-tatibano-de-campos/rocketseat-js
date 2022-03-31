const express = require('express')

const app = express()

app.listen('3000')

app.use(express.json())

let author = 'matheus'

app.route('/').get( (req,res) => res.send(author))

app.route('/').put( (req,res) => {
    author = req.body.author
    res.send(author)
})