const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const cors = require('cors');


//setting
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views')); ///posicion de la carpeta actual

app.use(cors());

////

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, { /////conexion a base de datos
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'galaxy',
    port: '3306'
}, 'single'));

/////

app.use(express.urlencoded({ extended: false })); /////para entender los datos de los formularios
app.use(express.json());

app.use(require('./routes/rutas'));

//static files
app.use(express.static(path.join(__dirname, 'public')))
    // listing the server
app.listen(app.get('port'), () => {

    console.log('server on port', app.get('port'));
});


////inicio de sesion