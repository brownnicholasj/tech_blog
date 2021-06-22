const router = require('express').Router();
const Blog = require('../../models/Blog');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
	try {
		const blogData = await Blog.create({
			title: req.body.blog_title,
			body: req.body.blog_body,
			author: req.body.author,
			user_id: req.body.user_id,
		});
		res.status(200).json({
			blogData,
			loggedIn: req.session.loggedIn,
			username: req.session.username,
		});
	} catch (err) {
		res.status(400).json(err);
	}
});

// TODO: According to MVC, what is the role of this action method?
router.put('/:id', async (req, res) => {
	// TODO: Where is this action method sending the data from the body of the fetch request? Why?
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
