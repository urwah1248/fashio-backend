const orderModel = require("../models/orderSchema")
const sendOrderEmail = require('./mailer')

const orderController = {
    addOrder: (req, res) => {   
        orderModel.create({ ...req.body }).then(product => {
            sendOrderEmail({...req.body})
            res.status(200).json({
                message: 'Order Received',
                product
            })
        })
            .catch(err => {
                console.log(req.body);
                res.status(500).json({
                    message: 'Something went wrong'
                })
            })
    },
    getAllOrders: (req, res) => {
        orderModel.find({}).then(orders => {
            res.status(200).json(
                orders
            )

        }).catch(err => {
            res.status(500).json({
                message: 'Something went wrong'
            })
        })
    }
}
module.exports = orderController