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
    console.log('si s ifunciona')
    req.getConnection((err, conn) => {
        console.log('si funciona')
        conn.query(`UPDATE products SET stock = ${req.stock} WHERE products.id =${req.params.id} `); (err, response) => {
            if (err) {
                return res.json({
                    error: true,
                    description: err
                });
            }
            if (err) {
                return res.json({
                    error: false,

                });
            }

        }
    })
}





module.exports = controller;
