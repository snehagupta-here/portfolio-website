const express = require('express');
const router = express.Router();
const achievementController = require('../controllers/achievementController');

// Route for getting achievements by username
router.get('/achievement', achievementController.getAchievementsByUsername);
// Route for creating an achievement
// router.post('/', achievementController.createAchievement);
// Route for creating an achievement
router.put('/update', achievementController.createOrUpdateAchievement);

// // Route for updating an achievement
// router.put('/', achievementController.updateAchievement);

// // Route for deleting an achievement
// router.delete('/', achievementController.deleteAchievement);



module.exports = router;
