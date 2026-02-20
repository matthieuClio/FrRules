// Express
const express = require('express');
// Router
const router = express.Router();
// Middlewares
const authenticate = require('../middlewares/auth.middleware');
const userContoller = require('../controllers/user.controller');

// Path
router.get('/profile', authenticate, userContoller.getProfile);

module.exports = router;
