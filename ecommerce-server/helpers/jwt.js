'use strict'

const jwt = require(`jsonwebtoken`)

function generateToken(obj) {
    return jwt.sign(obj, "hayamwuruk")
}

function readToken(hash) {
    return jwt.verify(hash, "hayamwuruk")
}

module.exports = {
    generateToken,
    readToken
}