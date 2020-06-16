import fs from "fs";
import path from "path";

const productController = {
	list: (req, res) => {
		let pathProducts = path.join("src", "db-mockups", "products.json");
		let productsJson = fs.readFileSync(pathProducts, { encoding: "utf-8" });
		let products = JSON.parse(productsJson);
		let activeProducts = products.filter((product) => product.active);

		let response = {
			status: "200",
			result: "ok",
			data: {
				metadata: {
					resultset: {
						offset: 0,
						limit: 1000,
						count: activeProducts.length,
					},
				},
				results: activeProducts,
			},
		};
		res.status(200).json(response);
	},
	show: (req, res) => {
		let pathProducts = path.join("src", "db-mockups", "products.json");
		let productsJson = fs.readFileSync(pathProducts, { encoding: "utf-8" });
		let products = JSON.parse(productsJson);
		let product = products.find((product) => product.id == req.params.id);

		let response = {
			status: "200",
			result: "ok",
			data: product,
		};
		res.status(200).json(response);
	},
	create: (req, res) => {
		let pathProducts = path.join("src", "db-mockups", "products.json");
		let productsJson = fs.readFileSync(pathProducts, { encoding: "utf-8" });
		let products = JSON.parse(productsJson);

		let newProduct = {
			id: products[products.length - 1].id + 1,
			name: req.body.name,
			description: req.body.description,
			price: Number(req.body.price),
			discount: Number(req.body.discount),
			stock: Number(req.body.stock),
			active: req.body.active,
		};
		products.push(newProduct);
		fs.writeFileSync(pathProducts, JSON.stringify(products));

		let response = {
			status: "201",
			result: "ok",
			message: "A new product was created with success",
			data: newProduct,
		};
		res.status(201).json(response);
	},
	edit: (req, res) => {
		let pathProducts = path.join("src", "db-mockups", "products.json");
		let productsJson = fs.readFileSync(pathProducts, { encoding: "utf-8" });
		let products = JSON.parse(productsJson);

		let productEdited = {
			id: Number(req.params.id),
			name: req.body.name,
			description: req.body.description,
			price: Number(req.body.price),
			discount: Number(req.body.discount),
			stock: Number(req.body.stock),
			active: req.body.active,
		};
		products.forEach((product, index) => {
			product.id == req.params.id
				? (products[index] = productEdited)
				: null;
		});
		fs.writeFileSync(pathProducts, JSON.stringify(products));

		let response = {
			status: "200",
			result: "ok",
			message: "Product edited with success",
			data: productEdited,
		};
		res.status(201).json(response);
	},
	delete: (req, res) => {
		let pathProducts = path.join("src", "db-mockups", "products.json");
		let productsJson = fs.readFileSync(pathProducts, { encoding: "utf-8" });
		let products = JSON.parse(productsJson);

		products.forEach((product, index) => {
			product.id == req.params.id
				? (products[index].active = false)
				: null;
		});
		fs.writeFileSync(pathProducts, JSON.stringify(products));
		let activeProducts = products.filter((product) => product.active);

		let response = {
			status: "200",
			result: "ok",
			message: "Product deleted with success",
			data: activeProducts,
		};
		res.status(201).json(response);
	},
};

export default productController;
