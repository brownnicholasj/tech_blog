const router = require('express').Router();
const Blog = require('../models/Blog');

// route to get all blogs
router.get('/', async (req, res) => {
	const blogData = await Blog.findAll().catch((err) => {
		res.json(err);
	});
	try {
		const blogs = blogData.slice(0, 4).map((blog) => blog.get({ plain: true }));
		// console.log(blogs);
		res.render('home', { blogs });
	} catch (error) {
		res.status(500).json(error);
	}
});

// route to get one blog
router.get('/blog/:id', async (req, res) => {
	try {
		const blogData = await blog.findByPk(req.params.id);
		if (!blogData) {
			res.status(404).json({ message: 'No blog with this id!' });
			return;
		}
		const blog = blogData.get({ plain: true });
		res.render('blog', blog);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
