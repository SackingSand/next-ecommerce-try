const Product = require('../models/product')

class Controller {

    static async getAll ( req, res) {
        await Product.find((error, result) => {
            if (error) {
                res.status(500).json({
                    error
                })
            } else {
                res.status(200).json(result)
            }
        })
    }

    static async getOne ( req, res) {
        const { id } = req.params
        await Product.findById(id, (error, result) => {
            if (error) {
                res.status(500).json({
                    error
                })
            } else {
                res.status(201).json(result)
            }
        })
    }

    static async updateAmount ( req, res) {
        const { id, change } = req.params
        await Product.findById(id, async (error, result) => {
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
                const { id, name, amount, price} = result;
                const newAmount = amount + parseInt(change);

                await Product.updateOne(
                    { _id: id }, { amount: newAmount }, (error, result) => {
                        if (error) {
                            console.log(error)
                            res.status(500).json({
                                error
                            })
                        } else {
                            res.status(200).json({
                                id, name, newAmount, price
                            })
                        }
                    }
                )
            }
        })
        
    }
}

module.exports = Controller
