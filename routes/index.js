const express = require('express');
const router = express.Router();
const Park = require("../models/Park.model")
const User = require('../models/User')
const Event = require("../models/Event")

/* GET home page */
router.get('/', (req, res, next) => {
  Park.find()
    .then(allParks => res.render('index', { user: req.user, parks: allParks }))
    .catch(err => console.log("error al recuperar info de la BBDD", err))
});

router.get('/api', (req, res, next) => {
  let arr = req.query.info
  if (arr == undefined) {
    obj = {}
  } else if (arr.length == 1) {
    obj = JSON.parse(arr)
  } else {
    let querys = []
    arr.forEach(elm => {
      querys.push(JSON.parse(elm))
    })
    obj = { $and: querys }
  }
  Park.find(obj)
    .then(allTheParks => {
      res.status(200).json({ park: allTheParks })
    })
    .catch(err => next(err))
})

router.get('/:id/park-detail', (req, res) => {
  Park.findById(req.params.id)
    .then(thePark => res.render('park-detail', { park: thePark, user: req.user }))
    .catch(err => console.log(err))
})
router.post('/park-detail', (req, res) => {
  const date = req.body.date
  const description = req.body.description
  let email = []
  email = (req.body.email).split(',')
  const user = req.user._id
  const park = req.query.id
  Event.create({ date, description, email, user, park })
    .then(event => {
      User.findByIdAndUpdate(user, { $addToSet: { event: event._id } })
        .then(user => {

          res.redirect('/auth/profile')
        })
    })
    .catch(err => 'error:' + err)
})
router.get('/delete', (req, res) => {
  Event.findByIdAndDelete(req.query.id)
    .then(x => res.redirect("/auth/profile"))
    .catch(err => console.log("error al eliminar el evento", err))
})
module.exports = router;


