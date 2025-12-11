const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
    coin: String,
    dolVal: mongoose.Types.Decimal128,
}, {
    timestamps: true,
    //convert decimal128 to string, so it displays
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) {
            if (ret.dolVal) {
                ret.dolVal = ret.dolVal.toString();
            }
        }
    }
})

module.exports = mongoose.model('coin', coinSchema)