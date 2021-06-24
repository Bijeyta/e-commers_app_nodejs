const express = require('express');

const shopControllers = require('../controllers/shop');

const router = express.Router();

router.get('/home',shopControllers.getHome);

router.get('/shop',shopControllers.getIndex);

router.get('/products',shopControllers.getProducts);

router.get('/product-details/:productId',shopControllers.getProductDetails);

router.get('/cart',shopControllers.getCart);

router.post('/cart',shopControllers.postCart);

router.post('/cart-delete-item', shopControllers.postCartDeleteProduct);

router.post('/create-order', shopControllers.postOrder);

router.get('/orders', shopControllers.getOrders);

module.exports = router;