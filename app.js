const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config();

const app = express()
const port = process.env.PORT || 8000

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

con.connect((err, connection) => {
    if (err) throw err;
    console.log('database connected successfully!');
});

app.get('/', (req, res) => {
    res.send('Welcome To HR Cloud Server!!!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})