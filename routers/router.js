const { addProduct, deleteProduct, getProductsByCategory, getAllProducts, getProductById } = require('../controllers/productController')
const { addOrder, getAllOrders } = require('../controllers/orderController')

const router = require('express').Router()

router.post('/product', addProduct)
router.delete('/product/:id', deleteProduct)
router.get('/products/:category', getProductsByCategory)
router.get('/product/:id', getProductById)
router.get('/products', getAllProducts)

router.post('/order', addOrder)
router.get('/orders', getAllOrders)

module.exports = router