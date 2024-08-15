const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/profileController'); // Adjust the path to your controller file

// Route for creating a profile
router.put('/', ProfileController.updateProfile);
router.post('/', ProfileController.createProfile);

// Route for updating a profile

// Route for getting profile by username
router.get('/profile', ProfileController.getProfileByUsername);

module.exports = router;
