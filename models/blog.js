const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		author: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		body: {
			type: DataTypes.STRING(15000),
			allowNull: true,
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: Sequelize.NOW,
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'user',
				key: 'id',
			},
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: 'blog',
	}
);

module.exports = Blog;
