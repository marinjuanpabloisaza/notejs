const controller = {};

controller.login = (req, res, next) => {
    console.log('----');
    req.getConnection((err, conn) => {
        conn.query(`SELECT name, email,role, image FROM users
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

module.exports = controller;