const express = require('express');
const router = express.Router();
const worksController = require('../controllers/worksController');

// Route for creating a work
router.post('/', worksController.createWork);

// Route for getting works by username
router.get('/', worksController.getWorksByUsername);

// update Work
router.put('/:id', worksController.updateWork);

// delete Work
router.delete('/:id', worksController.deleteWork);

module.exports = router;
