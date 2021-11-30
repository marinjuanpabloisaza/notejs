const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/productsController');
const LoginController = require('../controllers/sessionController');

router.get('/', (req, res) => {
    res.json({
        "API": "Galaxy",
        "version": "0.01",
        "author": "Juan Pablo Marin"
    })
});


router.get('/products', (req, res, next) => {
    ProductsController.list(req, res, next);
});

router.get('/products/:id', (req, res, next) => {
    ProductsController.listProductsCategory(req, res, next);
});

router.post('/login/', (req, res, next) => {
    LoginController.login(req, res, next);
});



module.exports = router;