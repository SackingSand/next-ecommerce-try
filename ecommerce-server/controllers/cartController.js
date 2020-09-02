const Cart = require('../models/cart')
const Product = require('../models/product')

class Controller {

    static async getCart ( req, res) {
        const uid = req.userId
        await Cart.find({ _id : uid }, (error, result) => {
            if (error) {
                res.status(500).json({
                    error
                })
            } else {
                res.status(200).json(result)
            }
        })
    }

    static async add ( req, res) {
        const uid = req.userId
        const { productId, amountProduct} = req.body
        const makeNew = new Cart({
            productId, userId : uid, amountProduct
        })
        await makeNew.save((error, result) => {
            if(error) {
                res.status(400).json({
                    error: error.message
                })
            } else {
                res.status(201).json(result)
            }
        })
    }

    static async deleteOne ( req, res) {
        const { id } = req.params
        await Cart.findByIdAndRemove(id, ( error, result) => {
            if(error) {
                res.status(400).json({
                    error
                })
            } else {
                res.status(200).json({
                    result: 1
                })
            }
        })
    }

    static async updateOne ( req, res) {
        const uid = req.userId
        const { productId, amountProduct} = req.body
        const { id } = req.params
        await Cart.findByIdAndUpdate(
            { _id: id }, { amountProduct }, (error, result) => {
                if (error) {
                    console.log(error)
                    res.status(400).json({
                        error
                    })
                } else {
                    res.status(200).json({
                        productId, uid, amountProduct
                    })
                }
            })
    }

    static async checkout ( req,res) {
        const uid = req.userId;
        await Cart.find({ _id : uid }, async (error, result) => {
            if (error) {
                res.status(500).json({
                    error
                })
            } else {
                let i = 0
                while(result) {
                    await Product.findById({_id : result[i].id }, (error, results) => {
                        if (error) {
                            res.status(500).json({
                                error
                            })
                        } else {
                            const newAmount = results.amount - result[i].amount
                            Product.findByIdAndUpdate({_id : result[i].id }, (error, resultss) => {
                                if (error) {
                                    res.status(500).json({
                                        error
                                    })
                                } else {
                                    res.status(200).json({
                                        resultss
                                    })
                                }
                            }) 
                        }
                        
                    })

                    i++;
                }
            }
        })

    }
}

module.exports = Controller
