var express = require('express');
var router = express.Router();
const Emojis = require('../models/emojis')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
});

router.get('/all', async function (req, res) {
  try {
    const emojis = await Emojis.find()
    res.json(emojis)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
