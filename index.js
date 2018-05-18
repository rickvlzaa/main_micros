const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const routes = require('./api/routes/index');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api', routes);

app.use('/', (req, res) => {
    res.send('Welcome to my page!')
})

app.listen(3000)

