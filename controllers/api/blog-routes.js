const router = require('express').Router();
const Blog = require('../../models/Blog');

// route to create/add a dish
router.post('/', async (req, res) => {
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
		// TODO: If the database is updated successfully, what happens to the updated data below?
		res.status(200).json(blog);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
