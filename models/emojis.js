const mongoose = require('mongoose')

const emojisSchema = new mongoose.Schema({
    1: String,
    2: String,
    3: String,
    4: String,
    5: String
})

module.exports = mongoose.model('Emojis', emojisSchema)