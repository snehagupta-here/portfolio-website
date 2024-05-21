const express = require('express');
const router = express.Router();
const Testimonials = require('../models/Testimonials');
const multer = require('multer');
const fs = require('fs').promises; // Use fs.promises for asynchronous file operations

// Multer middleware for file upload
const uploadmiddleware = multer({ dest: 'uploads/' });

// GET route to fetch testimonials
router.get('/', async (req, res) => {
    try {
        const testimonials = await Testimonials.find();
        res.json(testimonials);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST route to upload testimonial image and other data
router.post('/', uploadmiddleware.single('file'), async (req, res) => {
    try {
        const { author, company, position, testimonial } = req.body;

        if (!req.file) {
            const postDoc = await Testimonials.create({
                author: author,
                company: company,
                position: position,
                testimonial: testimonial,
            });

            return res.status(400).json({ error: 'No file uploaded' });
        }

        const { originalname, path } = req.file;
        const part = originalname.split('.');
        const ext = part[part.length - 1];
        const newPath = path + '.' + ext;

        // Rename the file with the correct extension
        await fs.rename(path, newPath);

        const postDoc = await Testimonials.create({
            testimonialimg: newPath,
            author: author,
            company: company,
            position: position,
            testimonial: testimonial,
        });

        res.json(postDoc);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
