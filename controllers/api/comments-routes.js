const router = require('express').Router();
const { Comments, Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
	try {
		const comment = await Comments.create({
			comment_body: req.body.comment_body,
			comment_author: req.body.comment_author,
			comment_date: req.body.comment_date,
		});
		res.status(200).json({ comment, loggedIn: req.session.loggedIn });
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
