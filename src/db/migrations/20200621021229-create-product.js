"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("products", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.TEXT,
			},
			price: {
				type: Sequelize.DECIMAL(10, 2),
			},
			discount: {
				type: Sequelize.INTEGER,
			},
			stock: {
				type: Sequelize.INTEGER,
			},
			active: {
				type: Sequelize.BOOLEAN,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal("NOW()"),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal("NOW()"),
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("products");
	},
};
