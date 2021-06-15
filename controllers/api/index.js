const router = require('express').Router();

const blogRoutes = require('./blog-routes');
const loginRoutes = require('./login-routes');
const dashboardRoutes = require('./dashboard-routes');
const commentsRoutes = require('./comments-routes');

router.use('/blog', blogRoutes);
router.use('/login', loginRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;
