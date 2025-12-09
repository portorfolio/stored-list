var express = require('express');
var router = express.Router();
const Coins = require('../models/coins');

/* GET users listing. */
router.get('/all', async function(req, res, next) {
  try{
    const coins = await Coins.find()
    res.render(coins);
  } catch(err) {
next(err)
  }
});

module.exports = router;
