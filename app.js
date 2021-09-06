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

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect((err, connection) => {
    if (err) throw err;
    console.log('database connected successfully!');
});

// data insert into employee table
// app.get('/', (req, res) => {
//     const sqlInsert = "INSERT INTO `employee` (`id`, `first_name`, `last_name`, `email`, `phone`) VALUES (NULL, 'sb', 'sk', 's@bb', '100');";
//     db.query(sqlInsert, (err, result) => {
//         res.send("hello")
//     })
// })

app.post("/api/insert", (req, res) => {

    const first_name = req.body.firstName
    const last_name = req.body.lastName
    const email = req.body.email
    const phone = req.body.phone

    const sqlInsert = "INSERT INTO `employee` (`id`, `first_name`, `last_name`, `email`, `phone`) VALUES (?, ?, ?, ?, ?);"
    db.query(sqlInsert, [id, first_name, last_name, email, phone], (err, result) => {
        console.log(err);
    })
})

app.get('/', (req, res) => {
    res.send('Welcome To HR Cloud Server!!!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})