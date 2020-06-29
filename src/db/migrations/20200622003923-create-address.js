"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("addresses", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			user_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "users",
					key: "id",
				},
			},
			address_line_1: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			address_line_2: {
				type: Sequelize.STRING,
			},
			apartment: {
				type: Sequelize.STRING,
				length: 50,
			},
			city: {
				type: Sequelize.STRING,
				length: 100,
				allowNull: false,
			},
			state: {
				type: Sequelize.STRING,
				length: 100,
				allowNull: false,
			},
			country: {
				type: Sequelize.STRING,
				length: 50,
				allowNull: false,
			},
			zip_code: {
				type: Sequelize.STRING,
				length: 50,
				allowNull: false,
			},
			active: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: 1,
			},
			is_primary: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: 0,
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
		return queryInterface.dropTable("addresses");
	},
};
