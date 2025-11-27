const mongoose = require('mongoose')

const emojisSchema = new mongoose.Schema({
    one: String,
    two: String,
    three: String,
    four: String,
    five: String
})

module.exports = mongoose.model('Emoji', emojisSchema)