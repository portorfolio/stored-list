const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
    coin: String,
    dolVal: mongoose.Types.Decimal128,
},{timestamps:true})

module.exports = mongoose.model('coin',coinSchema)