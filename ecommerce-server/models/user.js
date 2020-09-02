const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    saldo: Number,
    product: Array
})

module.exports = mongoose.model('user', userSchema, 'User')
