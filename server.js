const express = require('express')
const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const routes = require('./src/routes/user-routes.js')

routes(app)

app.route('/')
    .get((req, res) => {
        res.send('o método get funcionou!')
    })

const port = process.env.PORT || 3000

app.listen(port)

console.log('servidor funcionando', port)