const controller = {};

controller.login = (req, res, next) => {
    console.log('----');
    req.getConnection((err, conn) => {
        conn.query(`SELECT name, email,role FROM users
        WHERE email = '${req.body.name}' AND password = '${req.body.password}';`, (err, response) => {
            if (err) {
                res.json({
                    error:true,
                    description: err
                });
            }
            if(response.length>0) {
                res.json({
                    isLogin: true,
                    infoSession: response[0]
                })
            }else{
                res.json({
                    isLogin: false,
                    infoSession: {}
                })
            }
           

        });
    });
};

controller.registro = (req, res, next) => {
    console.log('----');
    req.getConnection((err, conn) => {
        conn.query(`INSERT INTO users (name,email,password,telefono,address, role) 
        values('${req.body.name}','${req.body.email}','${req.body.password}','${req.body.telefono}','${req.body.address}', 'USER');`, (err, response) => {
            if (err) {
                return res.json({
                    error:true,
                    description: err
                });
            }
            if(response) {
                res.json({
                    error: false,
                    infoSession: {
                        ...req.body,
                        id:response.insertId,
                        role:'USER',
                        image:'',
                    }
                })
            }else{
                res.json({
                    error: true,
                    infoSession: {}
                })
            }
           

        }); 
    });
};

module.exports = controller;