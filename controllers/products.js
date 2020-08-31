const Product = require('../models/products');
exports.getProducts = (req, res) => {
	res.status(200).json(Product.fetchAll());
};
