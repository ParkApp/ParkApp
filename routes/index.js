const express = require('express');
const router = express.Router();
const Park = require("../models/Park.model")
const User = require('../models/User')

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
  console.log(req.params)
  console.log(req.user)
  Park.findById(req.params.id)
    .then(thePark => res.render('park-detail', { park: thePark, user: req.user }))
    .catch(err => console.log(err))

})

module.exports = router;


