const express = require('express');
const router = express.Router();
const WorksController = require('../controllers/projectsController'); // Adjust the path to your controller file

// Route for creating a work
router.post('/', WorksController.createWork);

// Route for getting works by username
router.get('/', WorksController.getWorksByUsername);

// Route for updating a work
router.put('/:id', WorksController.updateWork);

// Route for deleting a work
router.delete('/:id', WorksController.deleteWork);

module.exports = router;
