"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("order_products", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			order_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "orders",
					key: "id",
				},
			},
			product_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "products",
					key: "id",
				},
			},
			price_per_item: {
				type: Sequelize.DECIMAL,
				precision: "10,2",
				allowNull: false,
			},
			total_items: {
				type: Sequelize.INTEGER,
				allowNull: false,
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
		return queryInterface.dropTable("order_products");
	},
};
