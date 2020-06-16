export const getProduct = {
	tags: ["Products"],
	description: "Returns one product by ID",
	operationId: "getProduct",
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
	],
	security: [
		{
			bearerAuth: [],
		},
	],
	responses: {
		"200": {
			description: "Success",
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
