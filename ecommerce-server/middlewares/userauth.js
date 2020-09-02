'use strict'

const User = require(`../models/user`)
const { readToken } = require(`../helpers/jwt`)


async function authenticate( req, res, next) {
    if(req.headers.token) {
        const { id } = readToken(req.headers.token);
        await User.findById(id, (error, result) => {
            if(error) {
                res.status(500).json({
                    error : err.message
                })
            } else {
                if(result){
                    req.userId = id;
                    next ();
                } else {
                    res.status(400).json({
                        error : `Invalid token supplied or user no longer exists`
                    })
                }
            }
        })
    } else {
        res.status(401).json({
            error : `Not logged in`
        })
    }
}

module.exports = authenticate