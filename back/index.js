const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
//++DB
const { Pool } = require('pg')
const pool = new Pool({
    user: "postgres",
    database: "Dogs",
    port: 5432,
    host: "localhost",
    password: "postgres",
})

async function selectTest(){
    pool.query('SELECT * FROM "Notes"')
    .then(res => console.log(res.rows))
    .catch(err => console.log(err))
}
//--DB




app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/registration', (req, res) => {
    res.send('registration')
})

app.get('/login', (req, res) => {
    selectTest();
    res.send('login');
})

app.get('/login', (req, res) => {
    selectTest();
    res.send('login');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})