var express = require('express');
var router = express.Router();
const Emojis = require('../models/emojis')


router.get('/view', async function (req, res) {
  try {
    const emojis = await Emojis.find().lean()
    res.render('emojis', { emojis })
  } catch (error) {
    console.log(error)
  }

})

module.exports = router;
