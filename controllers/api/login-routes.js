const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new user
router.post('/signin', async (req, res) => {
	try {
		console.log(`${req.body.username} ${req.body.email} ${req.body.password}`);
		const dbUserData = await User.create({
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
		});

		req.session.save(() => {
			req.session.loggedIn = true;
			res.status(200).json(dbUserData);
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// Login
router.post('/', async (req, res) => {
	try {
		const dbUserData = await User.findOne({
			where: {
				email: req.body.email,
			},
		});

		if (!dbUserData) {
			res
				.status(400)
				.json({ message: 'Incorrect email or password. Please try again!' });
			return;
		}

		const validPassword = await dbUserData.checkPassword(req.body.password);

		if (!validPassword) {
			res
				.status(400)
				.json({ message: 'Incorrect email or password. Please try again!' });
			return;
		}

		req.session.save(() => {
			if (!req.session.loggedIn) {
				req.session.loggedIn = true;
			}
			res
				.status(200)
				.json({
					user: dbUserData,
					loggedIn: req.session.loggedIn,
					message: 'You are now logged in!',
				});
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// Logout
router.post('/logout', (req, res) => {
	// When the user logs out, the session is destroyed
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});

module.exports = router;
