const express = require('express');
const router = express.Router();
const Park = require("../models/Park.model")

/* GET home page */
router.get('/', (req, res, next) => {

  Park.find()
    .then(allParks => res.render('index', { user: req.user, parks: allParks }))
    .catch(err => console.log("error al recuperar info de la BBDD", err))
});

router.get('/api', (req, res, next) => {
  console.log(req.query)
  Park.find()
    .then(allTheParks => res.status(200).json({ park: allTheParks }))
    .catch(err => next(err))
});

module.exports = router;
