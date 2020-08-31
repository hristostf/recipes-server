const faker = require('faker');
module.exports = class Product {
	static fetchAll() {
		let products = [];
		for (let i = 0; i < 10; i++) {
			products.push({
				name: faker.commerce.product(),
				price: faker.commerce.price(),
				description: faker.lorem.paragraph(),
				image: faker.image.imageUrl(),
			});
		}

		return products;
	}
};
