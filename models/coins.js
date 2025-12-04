const mongoose = require('mongoose')

const coinsSchema = new mongoose.Schema({
    coin: String,
    dolVal: {
        type: mongoose.Types.Decimal128
    },
    createdAt: {
        type: Date
    }
})

module.exports = mongoose.model('Coins', coinsSchema)