const { addProduct, deleteProduct, getProductsByCategory, getAllProducts, getProductById } = require('../controllers/productController')

const router = require('express').Router()

router.post('/product', addProduct)
router.delete('/product/:id', deleteProduct)
router.get('/products/:category', getProductsByCategory)
router.get('/product/:id', getProductById)
router.get('/products', getAllProducts)

module.exports = router