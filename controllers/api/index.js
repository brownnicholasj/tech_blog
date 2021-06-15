const router = require('express').Router();

const blogRoutes = require('./blog-routes');
const loginRoutes = require('./login-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/blog', blogRoutes);
router.use('/login', loginRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
