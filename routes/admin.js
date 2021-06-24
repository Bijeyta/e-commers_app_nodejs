const express = require('express');

const adminControllers = require('../controllers/admin');
const router = express.Router();

router.get('/add-product', adminControllers.getAddProduct);

router.get('/admin-products', adminControllers.getAdminProducts);

router.post('/add-product', adminControllers.postAddProduct);

router.post('/edit-product', adminControllers.postEditProduct);

router.get('/edit-product/:productId', adminControllers.getEditProduct);

router.post('/delete-product', adminControllers.postDeleteProduct);


module.exports = router;