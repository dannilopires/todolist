const express = require('express')
const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.route('/')
    .get((req, res) => {
        res.send('o método get funcionou!')
    })

    .post((req, res) => {
        res.send(req.body)
    })

const port = process.env.PORT || 3000

app.listen(port)

console.log('servidor funcionando', port)