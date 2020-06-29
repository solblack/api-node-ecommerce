"use strict";
module.exports = (sequelize, DataTypes) => {
	const Product = sequelize.define(
		"Product",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			name: DataTypes.STRING,
			description: DataTypes.TEXT,
			price: DataTypes.DECIMAL(10, 2),
			discount: DataTypes.INTEGER,
			stock: DataTypes.INTEGER,
			active: DataTypes.BOOLEAN,
			createdAt: DataTypes.DATE,
		},
		{
			tableName: "products",
			timestamps: true,
		}
	);
	Product.associate = function (models) {
		// associations can be defined here
	};
	return Product;
};
