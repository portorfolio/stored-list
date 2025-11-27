var express = require('express');
var router = express.Router();
const Emojis = require('../models/emojis')

router.get('/all', async function (req, res) {
  try {
    const emojis = await Emojis.find()
    res.json(emojis)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
