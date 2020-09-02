const User = require('../models/user')
const { generateToken } = require ('../helpers/jwt')

class Controller {

    static async login( req, res) {
        const { email, password } = req.body
        await User.findOne({email : email}, ( error, result) => {
            if (error) {
                res.status(500).json({
                    error
                })
            } else {
                if(!result) {
                    res.status(404).json({
                        error : 'not found'
                    })
                }
                if(result.password !== password) {
                    res.status(404).json({
                        error : 'Invalid username / password combination'
                    })
                }
                res.status(201).json({
                    token: generateToken({
                        id : result._id,
                        name : result.name
                    }),
                    id : result.id,
                    name : result.name
                })
            }
        })
    }

    static async getOne ( req, res) {
        const { id } = req.params
        await User.findById(id, (error, result) => {
            if (error) {
                res.status(500).json({
                    error
                })
            } else {
                res.status(201).json(result)
            }
        })
    }

    static async updateSaldo ( req, res) {
        const { id, change } = req.params
        await User.findById(id, (error, result) => {
            if (error) {
                res.status(500).json({
                    error
                })
            } else {
                if(!result) {
                    res.status(404).json({
                        error : 'not found'
                    })
                }
                const { id, name, email, saldo} = result;
                const newSaldo = saldo + parseInt(change);

                User.updateOne(
                    { _id: id }, { saldo: newSaldo }, (error, result) => {
                        if (error) {
                            console.log(error)
                            res.status(500).json({
                                error
                            })
                        } else {
                            res.status(200).json({
                                id, name, email, newSaldo
                            })
                        }
                    }
                )
            }
        })
    }
}

module.exports = Controller
