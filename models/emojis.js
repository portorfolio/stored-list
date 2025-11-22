const mongoose = require('mongoose')

const emojisSchema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('Emojis',emojisSchema)