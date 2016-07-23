'use strict';

// Dependencies
const express = require('express');

// Controller
const userCtrl = require('../controllers/userCtrl');

// Router
const router = express.Router();

// Routes

// Users
router.post('/users', userCtrl.create);
router.get('/users/:userId', userCtrl.read);
router.put('/users/:userId', userCtrl.update);
router.delete('/users/:userId', userCtrl.delete);

module.exports = router;
