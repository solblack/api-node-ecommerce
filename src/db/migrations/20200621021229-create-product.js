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
				length: 50,
				allowNull: false,
			},
			description: {
				type: Sequelize.TEXT,
				length: 2500,
				allowNull: false,
			},
			price: {
				type: Sequelize.DECIMAL,
				precision: "10,2",
				allowNull: false,
			},
			discount: {
				type: Sequelize.INTEGER,
				length: 3,
				allowNull: false,
				defaultValue: 0,
			},
			active: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: 1,
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
		return queryInterface.dropTable("products");
	},
};
