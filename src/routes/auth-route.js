const express = require('express');
const authMiddleware = require('../middlewares/auth');
const authController = require('../controllers/auth-controller');
const uploadFile = require('../middlewares/fileUpload');
const router = express.Router();

router.post('/login', authController.login);
router.get('/me', authMiddleware.authenticate, authController.getMe);
router.put('/update-picture', authMiddleware.authenticate, uploadFile.uploadProfile.single('profilePicture'), authController.updateProfile);

module.exports = router;