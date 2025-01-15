const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controllers');
const authMiddleware = require('../middlewares/auth');

router.get('/landing',authMiddleware.authenticate, userController.getUserLanding);

module.exports = router;