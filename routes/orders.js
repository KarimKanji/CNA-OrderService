const express = require('express')
const router = express.Router()
const Order = require('../models/order')
//const authToken = require('../middleware/authToken')

//GET Request för orders
router.get('/', async (req, res) => {

    try {
        const orders = await Order.find()
        res.send(orders)
    } catch (error) {
        res.status(500).send({ msg: error.message })

    }
})



//POST Request för orders
router.post('/', async (req, res) => {
    try {
            const orders = new Order({
                order_id: req.body.order_id,
                date: req.body.date,
                product_id: req.body.product_id,
                productName: req.body.productName,
                amount: req.body.amount,
                price: req.body.price,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                adress: req.body.adress,
                postCode: req.body.postCode,
                postalDistrict: req.body.postalDistrict,
                country: req.body.country,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
                orderType: req.body.orderType
            })

            const newOrder = await orders.save()
            res.send({ sparade: newOrder })
        }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
})





module.exports = router