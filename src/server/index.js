import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import routes from '../api/routes';

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use('/api', routes);

app.use('/', (req, res) => {
    res.send('Welcome to my page!')
})

app.listen(3000)