const controller = {};

controller.list = (req, res, next) => {
    req.getConnection((err, conn) => {
        conn.query(`SELECT products.id,products.stock, products.title, categories.title as category, products.price, 
        url_image, products.description
        FROM products
        INNER JOIN categories ON products.category_id = categories.id
        ORDER BY RAND()`, (err, response) => {
            if (err) {
                res.json(err);
            }
            const data = response.map(item => {
                return {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    stock: item.stock,
                    category: item.category,
                    description: item.description,
                    amount: 1,
                    images: item.url_image.split(',')
                }
            });
            res.json(data);
        });
    });
};


controller.listProductsCategory = (req, res, next) => {
    req.getConnection((err, conn) => {
        conn.query(`SELECT products.id, products.title, categories.title as category, products.price, url_image,
        products.description
        FROM products
        INNER JOIN categories ON products.category_id = categories.id
        WHERE category_id = ${req.params.id}`, (err, response) => {
            console.log('okkkkkk', err);
            if (err) {
                return res.json([]);
            }
            const data = response.map(item => {
                return {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    stock: item.stock,
                    category: item.category,
                    description: item.description,
                    amount: 1,
                    images: item.url_image.split(',')
                }
            });
            res.json(data);
        });
    });
};
controller.update = (req, res, next) => {
    req.getConnection((err, conn) => {
        conn.query(`UPDATE products SET title ='${req.body.title}', 
        price=${req.body.price}, 
        stock=${req.body.stock}, url_image='${req.body.url_image}',
        description='${req.body.description}', 
        category_id=${req.body.category_id} WHERE products.id =${req.body.id}`, (err, response) => {
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
        conn.query(`INSERT INTO products (title,price,stock,url_image,description,category_id) values('${req.body.title}',
        ${req.body.price},
        ${req.body.stock},
        '${req.body.url_image}',
        '${req.body.description}',
        ${req.body.category_id})`, (err, response) => {
            if (err) {
                return res.json({ mensaje: 'error al crear', err }).status(502);
            }
            else {
                return res.json({ mensaje: 'se creo correctamente', err });
            }
        })
    })
}

controller.delete = (req, res, next) => {
    req.getConnection((err, conn) => {
        conn.query(`DELETE FROM products WHERE products.id =${req.body.id}`, (err, response) => {
            if (err) {
                return res.json({ mensaje: 'error al eliminar', err }).status(502);
            }
            else {
                return res.json({ mensaje: 'se elimino correctamente', err });
            }
        })
    })
}





controller.updatestock = (req, res, next) => {
    const queryComprar = `INSERT INTO compra (state, id_usuario, total) values ('1', ${req.body.idUsuario}, ${req.body.total}) `;

    if (req.body.productos.length <= 0) {
        return res.json({ mensaje: 'no hay productos', code: 0, err: null });
    } else {
        req.getConnection((errDB, conn) => {
            console.log(errDB);
            conn.query(queryComprar, (err, response) => {
                if (err) {
                    return res.json({ mensaje: 'Error al realizar la compra', code: 500, err });
                }
                else {
                    req.body.productos.forEach(element => {
                        console.log(element);
                        const query = `INSERT INTO compras_productos (id_compras, id_productos) values (${response.insertId}, ${element.id}) `;
                        conn.query(`UPDATE products SET stock = ${element.stock - element.amount} WHERE products.id = ${element.id} `, (err, response) => { })
                        conn.query(query, (err, responseDetail) => { })
                    });
                    return res.json({ mensaje: 'Se ha realizado la compra', code: 200, err });
                }
            })
        })
    }
}


controller.historyshopAdmin = (req, res, next) => {
    req.getConnection((err, conn) => {
        console.log(req.params);
        conn.query(`SELECT users.id as user_id, compra.id, date, name, email, telefono, address, total 
        from compra  inner join users on users.id = id_usuario`, (err, response) => {
            
            if (err) {
                console.log("no comprazzzz");
                
                return res.json({ mensaje: 'no se  visualizo crrectamente', err }).status(502);
            }
            else {
                console.log(response);
                return res.json({ mensaje: 'se visualizo crrectamente   ', err,data:response });
            }
        })
    })

}




module.exports = controller;
