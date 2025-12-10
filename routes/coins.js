var express = require('express');
var router = express.Router();

const Coins = require('../models/coins');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    const coins = await Coins.find()
    res.render('coins',{list:coins});
  } catch(err) {
next(err)
  }
});

module.exports = router;
