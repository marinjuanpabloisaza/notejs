const controller = {};

controller.login = (req, res, next) => {
    console.log('--login--');
    req.getConnection((err, conn) => {
        conn.query(`SELECT id, name, email,role FROM users
        WHERE email = '${req.body.name}' AND password = '${req.body.password}';`, (err, response) => {
            if (err) {
                res.json({
                    error: true,
                    description: err
                });
            }
            if (response.length > 0) {
                res.json({
                    isLogin: true,
                    infoSession: response[0]
                })
            } else {
                res.json({
                    isLogin: false,
                    infoSession: {}
                })
            }
        });
    });
};

controller.registro = (req, res, next) => {
    console.log('--Registro--');
    req.getConnection((err, conn) => {
        conn.query(`INSERT INTO users (name,email,password,telefono,address, role) 
        values('${req.body.name}','${req.body.email}','${req.body.password}','${req.body.telefono}','${req.body.address}', 'USER');`, (err, response) => {
            if (err) {
                return res.json({
                    error: true,
                    description: err
                });
            }
            if (response) {
                res.json({
                    error: false,
                    infoSession: {
                        ...req.body,
                        id: response.insertId,
                        role: 'USER',
                        image: '',
                    }
                })
            } else {
                res.json({
                    error: true,
                    infoSession: {}
                })
            }
        });
    });
};

controller.userAll = (req, res, next) => {
    console.log("todos los usuarios");
    req.getConnection((err, conn) => {
        conn.query(`SELECT * FROM users`, (err, response) => {
            if (err) {
                return res.json([]);
            }
            const data = response.map(user => {
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    telefono: user.telefono,
                    role: user.role,
                    address: user.address
                };
            });
            res.json(data);
        })
    });
};



controller.update = (req, res, next) => {
    req.getConnection((err, conn) => {
        conn.query(`UPDATE users SET name ='${req.body.name}', 
        email='${req.body.email}', 
        password='${req.body.password}', telefono='${req.body.telefono}',
        role='${req.body.role}', 
        address='${req.body.address}' WHERE users.id =${req.body.id}`, (err, response) => {

            if (err) {
                return res.json({ mensaje: 'error al actualizar', err }).status(502);
            }
            else {
                return res.json({ mensaje: 'se actualizo correctamente', err });
            }
        })


    })
}



controller.create = (req, res, next) => {
    req.getConnection((err, conn) => {
        conn.query(`INSERT INTO users (name,email,password,telefono,address, role) 
        values('${req.body.name}','${req.body.email}','${req.body.password}','${req.body.telefono}','${req.body.address}', '${req.body.role}');`, (err, response) => {
            if (err) {
                return res.json({ mensaje: 'error al crear', err }).status(502);
            }
            else {
                return res.json({ mensaje: 'se creo correctamente', err });
            }
        })
    })
}


module.exports = controller;