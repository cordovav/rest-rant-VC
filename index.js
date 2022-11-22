//modules and globals
require('dotenv').config()
const methodOverride = require('method-override')
const express = require('express')
const app = express()

//express setting
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//controllers and routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) =>{
    res.render('home')
    //res.send('Hello Worlds!')
})

app.get('*', (req, res) =>{
    res.render('error404')
   // res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)