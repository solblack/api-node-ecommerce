export const getProducts = {
	tags: ["Products"],
	description: "Returns all products",
	operationId: "getProducts",
	security: [
		{
			bearerAuth: [],
		},
	],
	responses: {
		"200": {
			description: "A list of products.",
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
						properties: {
							metadata: {
								$ref: "#/definitions/ResponseMetadata",
							},
							results: {
								type: "array",
								items: {
									$ref: "#/definitions/ProductRequest",
								},
							},
						},
						type: "object",
					},
				},
			},
		},
	},
};
