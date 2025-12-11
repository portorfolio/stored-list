var express = require('express');
var router = express.Router();
const Coins = require('../models/coins');

/* GET coin collection */
router.get('/', async function (req, res, next) {
  try {
    const coins = await Coins.find()
    res.render('coins', { list: coins });
  } catch (err) {
    next(err)
  }
});

router.get('/all', async function (req, res) {
  let totalVal = 0;
  try {
    const coins = await Coins.find()
    res.json(coins)
  } catch (error) {
    console.log(error);
    res.send('Oops')
  }
}
)

//find item by specific id
router.get('/:id', async function (req, res) {
  const id = req.params.id;
  try {
    const coin = await Coins.find({ _id: id });
    res.json(coin)
  } catch (error) {
    console.log(error);
    res.send('Oops')
  }
}
)

router.post('/', async function (request, response) {
  console.log(request.body);

  try {
    const newCoins = {
      ...request.body,
    }
    console.log(newCoins)
    const newCoin = await Coins.create(newCoins);
    response.json(newCoin)
  } catch (error) {
    console.log(error);
    res.send('Oops')
  }
}
)

router.put('/:id', async function (request, response) {
  console.log(request.params.id);
  console.log(request.body);

  try {
    const updatedCoin = await Coins.findByIdAndUpdate(
      request.params.id,
      {
        ...request.body
      }
    )
    response.json(updatedCoin)
  } catch (error) {
    console.log(error);
    response.send('oops')
  }
})

router.delete('/:id', async function (request, response) {
  try {
    const deletedCoin = await Coins.findByIdAndDelete(request.params.id)
  } catch (error) {
    console.log(error);
    response.send('oops')
  }
})

module.exports = router;
