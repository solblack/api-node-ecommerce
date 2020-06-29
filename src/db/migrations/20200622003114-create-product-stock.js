"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("product_stock", {
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
			color_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "colors",
					key: "id",
				},
			},
			size_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "sizes",
					key: "id",
				},
			},
			quantity: {
				type: Sequelize.INTEGER,
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
		return queryInterface.dropTable("product_stock");
	},
};
