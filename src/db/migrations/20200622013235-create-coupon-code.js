"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("coupon_codes", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			code: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			expiration_date: {
				type: Sequelize.DATE,
			},
			max_times_use: {
				type: Sequelize.INTEGER,
			},
			times_used: {
				type: Sequelize.INTEGER,
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
		return queryInterface.dropTable("coupon_codes");
	},
};
