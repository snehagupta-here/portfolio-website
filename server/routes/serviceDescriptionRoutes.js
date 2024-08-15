const express = require('express');
const router = express.Router();
const serviceDescriptionController = require('../controllers/serviceDescriptionController');

// Route for creating a service description
router.post('/', serviceDescriptionController.createServiceDescription);

// Route for getting service descriptions by username
router.get('/', serviceDescriptionController.getServiceDescriptionsByUsername);

//update Service Description
router.put('/', serviceDescriptionController.updateServiceDescription);

module.exports = router;
