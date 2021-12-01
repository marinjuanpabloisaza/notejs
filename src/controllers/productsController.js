const controller = {};

controller.list = (req, res, next) => {
    req.getConnection((err, conn) => {
        conn.query(`SELECT products.id, products.title, categories.title as category, products.price, 
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
            console.log('okkkkkk',err);
            if (err) {
               return res.json([]);
            }
            const data = response.map(item => {
                return {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    stock: item.stock,
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


module.exports = controller;
