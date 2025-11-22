var express = require('express');
var router = express.Router();
const Emojis = require('../models/emojis')

/* GET users listing. */
router.get('/all', async function(req, res, next) {
  try{
    const emojis = (await Emojis.find()).toSorted({
      createdAt: -1
    })
    res.json(emojis)
  } catch (error){
    next(error)
  }
});

module.exports = router;
