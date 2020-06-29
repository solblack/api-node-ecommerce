"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("shippings", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			address_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "addresses",
					key: "id",
				},
			},
			status_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "shipping_statuses",
					key: "id",
				},
			},
			tracking_number: {
				type: Sequelize.STRING,
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
		return queryInterface.dropTable("shippings");
	},
};
