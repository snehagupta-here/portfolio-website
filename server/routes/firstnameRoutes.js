const express = require('express');
const router = express.Router();
const FirstnameController = require('../controllers/firstnameController'); // Adjust the path to your controller file

// Route for creating a firstname entry
router.post('/', FirstnameController.createFirstname);

// Route for updating a firstname entry
router.put('/updatefirstname', FirstnameController.updateFirstname);

// Route for updating a lastname entry
router.put('/updatelastname', FirstnameController.updateLastname);

// Route for getting firstname by username
router.get('/getuser', FirstnameController.getFirstnameByUsername);

module.exports = router;
