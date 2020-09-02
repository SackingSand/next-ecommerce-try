const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    price: Number,
    userId: String
})

module.exports = mongoose.model('product', productSchema, 'Product')
