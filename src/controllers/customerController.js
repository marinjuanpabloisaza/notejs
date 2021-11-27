const controller = {};

controller.list = (req, res) => {
    console.log(req);
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cliente', (err, cliente) => {
            if (err) {

                rest.json(err);
            }
            rest.render('cliente', {
                data: cliente
            });
        });
    });

};
///crear usuario con conecion  a html
controller.save = (req, res) => { ///conectividad del html que se obtiene del html a base de datos
    const data = {
        nombre_cl: req.body.nombre,
        apellido_cl: req.body.apellido,
        email_cl: req.body.correo,
        password: req.body.password,
        fecha_cl: req.body.fecha,
        celular_cl: req.body.celular,
        telefonofijo_cl: req.body.telefono,
        direcion_cl: req.body.direcion,
        ciudad_cl: req.body.municipio,
        celuda_cl: req.body.cedula

    };
    console.log(req.body);
    req.getConnection((err, conn) => {

        conn.query('INSERT INTO cliente set ?', [data], (err, cliente) => {
            console.log(cliente);
            console.log(err)
            res.send("su usuario ha sido creado correctamente")

        });
    });

};
module.exports = controller;