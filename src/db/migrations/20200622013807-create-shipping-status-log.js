"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("shipping_status_logs", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			shipping_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "shippings",
					key: "id",
				},
			},
			new_status_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "shipping_statuses",
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
		return queryInterface.dropTable("shipping_status_logs");
	},
};
