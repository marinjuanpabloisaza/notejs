const express = require('express');
const router = express.Router();
//vista del carrito de compra
router.get('/carrito', (req, res) => {

    res.render('carrito.html', {

    });
});

////perfil
router.get('/perfil', (req, res) => {

    res.render('perfil.html', {

    });
});
///// index rendirizacion 
router.get('/', (req, res) => {

    res.render('index.html', {

    });
});

///// controlador del inicio de session


/////controladores del registro
const customerControllers = require('../controllers/customerController');
router.get('/', customerControllers.list, (req, res) => {});
///datos del registro
router.post('/add', customerControllers.save, (req, res) => {

});
/*

*/
////login










module.exports = router;