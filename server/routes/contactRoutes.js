const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Route for creating or updating contact information
router.post('/', contactController.createContact);

// Route for creating or updating contact information
router.put('/:id', contactController.createOrUpdateContact);

// Route for getting contact information by username
router.get('/', contactController.getContactByUsername);

// delete 
router.delete('/:id', contactController.deleteContact);

module.exports = router;