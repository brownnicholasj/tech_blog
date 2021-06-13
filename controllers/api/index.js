const router = require('express').Router();

const blogRoutes = require('./blog-routes');
const loginRoutes = require('./login-routes');

router.use('/blog', blogRoutes);
router.use('/login', loginRoutes);

module.exports = router;
