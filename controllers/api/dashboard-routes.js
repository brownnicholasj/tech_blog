const router = require('express').Router();
const Blog = require('../../models/Blog');
const Comment = require('../../models/Comments');
const withAuth = require('../../utils/auth');

router.post('/comment', withAuth, async (req, res) => {
	try {
		const commentData = await Comment.create({
			body: req.body.comment_body,
			blog_id: req.body.blog_id,
			author: req.body.author,
		});
		res.status(200).json(commentData);
	} catch (err) {
		res.status(400).json(err);
	}
});

router.put('/:id', withAuth, async (req, res) => {
	try {
		const blog = await Blog.update(
			{
				title: req.body.blog_title,
				body: req.body.blog_body,
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
