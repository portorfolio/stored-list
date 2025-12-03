var express = require('express');
var router = express.Router();
const Emojis = require('../models/emojis')

/* GET home page. */
router.get('/', async function (req, res) {
  try {
    const emojis = await Emojis.find().lean()
    res.render('index', { emojis })
  } catch (error) {
    console.log(error)
  }

})

module.exports = router;
