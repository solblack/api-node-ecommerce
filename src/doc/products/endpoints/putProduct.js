export const putProduct = {
	tags: ["Products"],
	description: "Edit a product by ID",
	operationId: "putProduct",
	parameters: [
		{
			name: "id",
			in: "path",
			required: true,
			description: "Product ID",
			schema: {
				type: "integer",
				minimum: 1,
			},
		},
		{
			name: "data",
			in: "body",
			required: true,
			description: "Product data",
			schema: {
				$ref: "#/definitions/ProductRequest",
			},
		},
	],
	security: [
		{
			bearerAuth: [],
		},
	],
	responses: {
		"200": {
			description: "Product edited with success",
			schema: {
				properties: {
					result: {
						example: "ok",
						type: "string",
					},
					status: {
						example: 200,
						type: "number",
					},
					data: {
						$ref: "#/definitions/ProductRequest",
						type: "object",
					},
				},
			},
		},
		"400": {
			description: "Bad request",
			schema: {
				$ref: "#/definitions/ResponseError",
			},
		},
		"401": {
			description: "Not authorized",
			schema: {
				$ref: "#/definitions/ResponseError",
			},
		},
		"403": {
			description: "Invalid Token",
			schema: {
				$ref: "#/definitions/ResponseError",
			},
		},
		"500": {
			description: "There's been a problem processing your request",
			schema: {
				$ref: "#/definitions/ResponseError",
			},
		},
	},
};
