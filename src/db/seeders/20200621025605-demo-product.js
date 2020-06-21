"use strict";
const fs = require("fs");
const path = require("path");
const file = path.join("src", "db-mockups", "products.json");
const productsJson = fs.readFileSync(file, { encoding: "utf-8" });
const products = JSON.parse(productsJson);

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert("products", products, {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("users", null, {});
	},
};
