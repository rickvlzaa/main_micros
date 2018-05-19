import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
// import morgan from 'morgan';

import routes from '../api/routes';

// require('dotenv').config();

const app = express()

// if(process.env.NODE_ENV === "development") {
//     app.use(morgan('dev'))
// }

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())

app.use('/api', routes);

app.use('/', (req, res) => {
    res.send(`request: ${req.url}`)
})

app.listen(3000)