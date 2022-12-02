const router = require('express').Router()
const db = require('../models')


router.get('/', (req, res) => {
    db.Place.find()
    .then((places)=> {
        res.render('places/index', { places })
    })
    .catch(err=> {
        console.log(err)
        res.render('error404')
    })
})

router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(()=> {
        res.redirect('/places')
    })
    .catch(err=> {
        console.log('err', err)
        res.render('error404')
    })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.put('/:id', (req, res) => {
    res.send('GET /places/:id stub')
})

router.delete('/', (req, res) => {
    res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
})

router.get('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

router.get('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router

