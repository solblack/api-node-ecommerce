"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("orders", {
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
			shipping_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "shippings",
					key: "id",
				},
			},
			total_amount: {
				type: Sequelize.DECIMAL,
				precision: "10,2",
				allowNull: false,
			},
			payment_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "payments",
					key: "id",
				},
			},
			status_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "order_statuses",
					key: "id",
				},
			},
			coupon_code_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					model: "coupon_codes",
					key: "id",
				},
			},
			discounted_amount: {
				type: Sequelize.DECIMAL,
				precision: "10,2",
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
		return queryInterface.dropTable("orders");
	},
};
