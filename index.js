require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send('Hello Worlds!')
})

app.listen(process.env.PORT)