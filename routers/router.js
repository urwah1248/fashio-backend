const { addProduct, deleteProduct, getProductsByCategory, getAllProducts } = require('../controllers/productController')

const router = require('express').Router()

router.post('/product', addProduct)
router.delete('/product/:id', deleteProduct)
router.get('/products/:category', getProductsByCategory)
router.get('/products/', getAllProducts)

module.exports = router