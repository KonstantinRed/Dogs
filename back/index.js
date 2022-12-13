const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000


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
    res.send('login')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})