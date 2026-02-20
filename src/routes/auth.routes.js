// Express
const express = require('express');
// Router
const router = express.Router();
// Controller
const authController = require('../controllers/auth.controller');

// Paths
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;