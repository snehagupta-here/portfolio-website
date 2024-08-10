const express = require('express');
const router = express.Router();
const bioController = require('../controllers/bioController');

// Route for creating or updating bio
router.put('/', bioController.createOrUpdateBio);

// Route for creating or updating bio
router.post('/createbio', bioController.createBio);
// Route for getting bio by username
router.get('/bio', bioController.getBioByUsername);

module.exports = router;
