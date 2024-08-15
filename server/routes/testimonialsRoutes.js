const express = require('express');
const router = express.Router();
const TestimonialsController = require('../controllers/testimonialsController');

// Route for creating a work
router.post('/', TestimonialsController.createWork);

// Route for getting Testimonials by username
router.get('/', TestimonialsController.getTestimonialsByUsername);

// updateTestimonial
router.put('/:id', TestimonialsController.updateTestimonial);

// deleteTestimonial
router.delete('/:id', TestimonialsController.deleteTestimonial);

module.exports = router;