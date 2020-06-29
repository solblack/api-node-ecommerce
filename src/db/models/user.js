"use strict";
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: DataTypes.STRING,
			createdAt: DataTypes.DATE,
		},
		{
			tableName: "users",
			timestamps: true,
		}
	);
	User.associate = function (models) {
		// associations can be defined here
	};
	return User;
};
