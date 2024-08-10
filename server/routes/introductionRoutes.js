const express = require('express');
const router = express.Router();
const introductionController = require('../controllers/introductionController');

// Route for creating an introduction
router.post('/', introductionController.createIntroduction);

// Route for getting an introduction by username
router.get('/getintroduction', introductionController.getIntroductionByUsername);

// updating intro 
router.put('/updateintroduction', introductionController.updateIntroduction);

module.exports = router;
