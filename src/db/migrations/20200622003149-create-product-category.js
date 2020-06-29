"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("product_categories", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			product_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "products",
					key: "id",
				},
			},
			category_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "categories",
					key: "id",
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("product_categories");
	},
};
