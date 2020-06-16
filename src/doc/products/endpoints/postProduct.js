export const postProduct = {
	tags: ["Products"],
	description: "Create a new product",
	operationId: "postProduct",
	parameters: [
		{
			name: "data",
			in: "body",
			required: true,
			description: "Product data",
			schema: {
				$ref: "#/definitions/ProductSaveRequest",
			},
		},
	],
	security: [
		{
			bearerAuth: [],
		},
	],
	responses: {
		"201": {
			description: "A new product was created with success",
			schema: {
				properties: {
					result: {
						example: "ok",
						type: "string",
					},
					status: {
						example: 201,
						type: "number",
					},
					message: {
						example: "A new product was created with success",
						type: "string",
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
