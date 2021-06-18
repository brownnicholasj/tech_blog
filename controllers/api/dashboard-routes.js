const router = require('express').Router();
const Blog = require('../../models/Blog');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
	try {
		const blogData = await Blog.findByPk(req.params.id);
		const blog = blogData.get({ plain: true });
		res.render('dashboardForm', { blog, loggedIn: req.session.loggedIn });
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/', withAuth, async (req, res) => {
	try {
		const blogData = await Blog.create({
			blog_name: req.body.blog_name,
			description: req.body.description,
			guest_name: req.body.guest_name,
			has_nuts: req.body.has_nuts,
		});
		res.status(200).json(blogData);
	} catch (err) {
		res.status(400).json(err);
	}
});

router.put('/:id', withAuth, async (req, res) => {
	try {
		const blog = await Blog.update(
			{
				blog_name: req.body.blog_name,
				description: req.body.description,
				guest_name: req.body.guest_name,
				has_nuts: req.body.has_nuts,
			},
			{
				where: {
					id: req.params.id,
				},
			}
		);

		res.status(200).json(blog);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
