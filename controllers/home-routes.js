const router = require('express').Router();
const Blog = require('../models/Blog');
const withAuth = require('../utils/auth');

// route to get all blogs
router.get('/', async (req, res) => {
	const blogData = await Blog.findAll().catch((err) => {
		res.json(err);
	});
	try {
		const blogs = blogData
			.reverse()
			.slice(0, 4)
			.map((blog) => blog.get({ plain: true }));
		// console.log(blogs);
		res.render('home', { blogs, loggedIn: req.session.loggedIn });
	} catch (error) {
		res.status(500).json(error);
	}
});

// route to get one blog
router.get('/blog/:id', async (req, res) => {
	try {
		const blogData = await Blog.findByPk(req.params.id, {
			include: [{ model: Comments }],
		});
		if (!blogData) {
			res.status(404).json({ message: 'No blog with this id!' });
			return;
		}
		const blog = blogData.get({ plain: true });
		res.render('blog', { blog, loggedIn: req.session.loggedIn });
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/dashboard', async (req, res) => {
	const blogData = await Blog.findAll().catch((err) => {
		res.json(err);
	});
	try {
		const blogs = blogData.reverse().map((blog) => blog.get({ plain: true }));
		// console.log(blogs);
		res.render('dashboard', { blogs, loggedIn: req.session.loggedIn });
	} catch (error) {
		res.status(500).json(error);
	}
});

// Login route
router.get('/login', (req, res) => {
	if (req.session.loggedIn) {
		res.redirect('/');
		return;
	}
	res.render('login');
});

module.exports = router;
