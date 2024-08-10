const express = require('express');
const router = express.Router();
const titleController = require('../controllers/titleController');
const multer = require("multer");
const upload = multer();
// Route for creating a title
router.post('/create', upload.none(),titleController.createTitle);

// Route for editing a specific title
router.put('/edit/:id', titleController.editTitle);

// // Route for removing a specific title
router.delete('/remove/:id', titleController.removeTitle);

// Route for getting all titles 
router.get('/allTitles', titleController.getAllTitles );

// // Route for getting titles by username
router.get('/:username', titleController.getTitleByUsername);


module.exports = router;
