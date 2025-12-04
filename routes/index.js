var express = require('express');
var router = express.Router();
const Coins = require('../models/coins')

/* GET home page. */
router.get('/', async function (req, res) {
  try {
    const coins = await Coins.find()
    res.render('index', { coins })
  } catch (error) {
    console.log(error)
  }

})

module.exports = router;
