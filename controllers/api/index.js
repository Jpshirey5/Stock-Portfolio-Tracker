const router = require('express').Router();

const stockRoutes = require('./stock-routes.js');

router.use('/transaction', stockRoutes);

module.exports = router;