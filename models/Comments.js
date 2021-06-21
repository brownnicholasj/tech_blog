const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');
const Blog = require('./Blog');

class Comments extends Model {}

Comments.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		body: {
			type: DataTypes.STRING(15000),
			allowNull: true,
		},
		author: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: Sequelize.NOW,
		},
		blog_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'blog',
				key: 'id',
			},
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
		modelName: 'comments',
	}
);

module.exports = Comments;
