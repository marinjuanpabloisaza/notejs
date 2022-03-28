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
router.put('/products', (req, res, next)=> {
    ProductsController.update(req, res, next);
})
router.post('/products', (req, res, next)=> {
    ProductsController.create(req, res, next);
})
router.delete('/products', (req, res, next)=> {
    ProductsController.delete(req, res, next);
})

router.get('/products/:id', (req, res, next) => {
    ProductsController.listProductsCategory(req, res, next);
});


router.post('/login/', (req, res, next) => {
    LoginController.login(req, res, next);
});


router.post('/registro/', (req, res, next) => {
    LoginController.registro(req, res, next);
});
router.get('/users/', (req, res, next) => {
    LoginController.userAll(req, res, next);
});
router.put('/users/', (req, res, next) => {
    LoginController.update(req, res, next);
});

router.post('/users/', (req, res, next) => {
    LoginController.create(req, res, next);
});



router.put('/checkout', (req, res, next)=> {
    ProductsController.updatestock(req, res, next);
})



module.exports = router;