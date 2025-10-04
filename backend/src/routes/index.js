const express = require('express');
const contentRoutes = require('./content.routes');
const router = express.Router();

router.use('/content', contentRoutes);

module.exports = router;