const User = require('./User');
const Blog = require('./Blog');
const Comments = require('./Comments');

// Blog.hasOne(User, {
// 	foreignKey: 'username',
// });

// User.hasMany(Blog, {
// 	foreignKey: 'blog_author',
// });

module.exports = { User, Blog, Comments };
