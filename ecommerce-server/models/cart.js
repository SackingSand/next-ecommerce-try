const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    productId: String,
    userId: String,
    amountProduct: Number
})

module.exports = mongoose.model('cart', cartSchema, 'Cart')
