const express = require('express');
const router = express.Router();
// const titleController = require('../controllers/titleController');
const multer = require("multer");
const upload = multer();
const skillsController = require('../controllers/skillsController');

// Route for creating a skill
router.post('/create', upload.none() , skillsController.createSkill);

// Route for editing a specific skill
router.put('/edit/:id', skillsController.editSkill);

// Route for removing a specific skill
router.delete('/remove/:id', skillsController.removeSkill);

// Route for getting skills by username
router.get('/:username', skillsController.getSkillsByUsername);

router.get('/', skillsController.getAllSkills);

module.exports = router;
