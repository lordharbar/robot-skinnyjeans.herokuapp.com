'use strict';

// Dependencies
const express = require('express');

// Router
const router = express.Router();

//Routes
router.get('/test', function(req, res, next) {
  res.json({message: 'This is just a test!'});
});

module.exports = router;
