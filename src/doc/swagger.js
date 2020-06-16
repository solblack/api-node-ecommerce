import {
	getProducts,
	postProduct,
	getProduct,
	putProduct,
	deleteProduct,
	productSaveRequest,
	productRequest,
} from "./products/index";

const host = "localhost:3000";

const swaggerDocument = {
	swagger: "2.0",
	info: {
		title: "eCommerce API",
		version: "1.0.0",
		description: "Documentation for this eCommerce API",
		contact: {
			name: "Sol Latorre Beorlegui",
			url: "https://www.linkedin.com/in/solb",
			email: "solbeor@gmail.com",
		},
	},
	host: host,
	basePath: "/",
	schemes: ["https", "http"],
	swagger: "2.0",
	paths: {
		"/api/products": {
			get: getProducts,
			post: postProduct,
		},
		"/api/products/{id}": {
			get: getProduct,
			put: putProduct,
			delete: deleteProduct,
		},
		"/api/swagger.json": {
			get: {
				tags: ["swagger.json"],
				description: "Returns swagger.json file",
				operationId: "getSwaggerJson",
				responses: {
					"200": {
						description: "Success",
						schema: {
							example: "swagger.json file with API documentation",
							type: "string",
						},
					},
					"500": {
						description:
							"There's been a problem processing your request",
						schema: {
							$ref: "#/definitions/ResponseError",
						},
					},
				},
			},
		},
	},
	definitions: {
		ResponseError: {
			description: "Error description",
			properties: {
				result: {
					example: "error",
					type: "string",
				},
				status: {
					example: "Status Code: 4xx, 5xx",
					type: "integer",
				},
				developerMessage: {
					example: "Parse error: syntax error, unexpected...",
					type: "string",
				},
				validationErrors: {
					items: {
						$ref: "#/definitions/ValidationError",
					},
					type: "array",
				},
				userMessage: {
					example: "A problem occured when trying to...",
					type: "string",
				},
			},
			type: "object",
		},
		ValidationError: {
			title: "ValidationError",
			description: "Validation error",
			properties: {
				property_path: {
					example: "name",
					type: "string",
				},
				message: {
					example: "Name property is mandatory",
					type: "string",
				},
			},
			type: "object",
		},
		ResponseMetadata: {
			title: "Metadata",
			description: "Metadata",
			properties: {
				resultset: {
					properties: {
						offset: {
							example: 0,
							type: "integer",
						},
						limit: {
							example: 10,
							type: "integer",
						},
						count: {
							example: 5431,
							type: "integer",
						},
					},
					type: "object",
				},
			},
			type: "object",
		},
		ProductRequest: productRequest,
		ProductSaveRequest: productSaveRequest,
	},
	securityDefinitions: {
		access_token: {
			name: "Authorization",
			type: "apiKey",
			in: "header",
			description: "Access Token with format: Bearer {jwt}",
		},
	},
};

export default swaggerDocument;
