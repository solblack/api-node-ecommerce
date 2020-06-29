"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("product_photos", {
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
			order: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			color_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "colors",
					key: "id",
				},
			},
			filename: {
				type: Sequelize.STRING,
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
		return queryInterface.dropTable("product_photos");
	},
};
