const { Model, DataTypes } = require('sequelize');
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
		comment_body: {
			type: DataTypes.STRING(15000),
			allowNull: true,
		},
		comment_author: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		comment_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		blog_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'blog',
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
