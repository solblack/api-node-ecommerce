export const productRequest = {
	title: "ProductRequest",
	properties: {
		id: {
			type: "integer",
			example: 12,
		},
		name: {
			type: "string",
			example: "Little black dress",
		},
		description: {
			type: "string",
			example: "Description of the product",
		},
		price: {
			type: "number",
			example: 30,
		},
		discount: {
			type: "integer",
			example: 10,
		},
		stock: {
			type: "integer",
			example: 500,
		},
		active: {
			type: "boolean",
			example: true,
		},
	},
	type: "object",
};
