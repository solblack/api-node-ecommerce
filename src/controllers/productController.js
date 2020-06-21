import db from "../db/models";

const productController = {
	list: async (req, res) => {
		const products = await db.Product.findAll({
			where: { active: true },
		});

		let response = {
			status: "200",
			result: "ok",
			data: {
				metadata: {
					resultset: {
						offset: 0,
						limit: 1000,
						count: products.length,
					},
				},
				results: products,
			},
		};
		return res.status(200).json(response);
	},
	show: async (req, res) => {
		try {
			const product = await db.Product.findByPk(req.params.id);

			let response = {
				status: "200",
				result: "ok",
				data: product ? product : { message: "No product found" },
			};
			return res.status(200).json(response);
		} catch (error) {
			let response = {
				status: "500",
				result: "error",
				message: error,
				data: { messageError: error },
			};
			return res.status(500).json(response);
		}
	},
	create: async (req, res) => {
		try {
			const product = await db.Product.create(req.body);

			let response = {
				status: "201",
				result: "ok",
				message: "A new product was created with success",
				data: product,
			};
			return res.status(201).json(response);
		} catch (error) {
			let response = {
				status: "500",
				result: "error",
				message: "There's been an error creating the product.",
				data: { error: error },
			};
			return res.status(500).json(response);
		}
	},
	edit: async (req, res) => {
		try {
			const update = await db.Product.update(req.body, {
				where: { id: req.params.id },
			});

			if (update == 0) throw new Error("No product found");

			const product = await db.Product.findByPk(req.params.id);

			let response = {
				status: "200",
				result: "ok",
				message: "The product was edited with success",
				data: product,
			};
			return res.status(200).json(response);
		} catch (error) {
			console.log(error);

			let response = {
				status: "500",
				result: "error",
				message: "There's been an error updating the product.",
				data: { error: error.message },
			};
			return res.status(500).json(response);
		}
	},
	delete: async (req, res) => {
		try {
			const deleted = await db.Product.update(
				{ active: 0 },
				{
					where: { id: req.params.id, active: true },
				}
			);

			if (deleted == 0) throw new Error("No product found");

			let response = {
				status: "200",
				result: "ok",
				message: "The product was deleted with success",
			};
			return res.status(200).json(response);
		} catch (error) {
			let response = {
				status: "500",
				result: "error",
				message: "There's been an error deleting the product.",
				data: { error: error.message },
			};
			return res.status(500).json(response);
		}
	},
};

export default productController;
