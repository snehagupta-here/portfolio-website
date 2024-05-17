const express = require('express');
const router = express.Router();
const multer = require('multer');
const About = require('../models/About');

// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/resumes/'); // Ensure this directory exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('resume'), async (req, res) => {
    const { bio, skills, services, achievements } = req.body;
    const resume = req.file;

    // Basic validation
    if (!bio || !skills || !services || !achievements || !resume) {
        return res.status(400).json({ error: 'All fields including resume are required' });
    }

    try {
        const postDoc = await About.create({
            bio,
            skills,
            services,
            achievements,
            resume: resume.path // Save the path of the uploaded file
        });
        res.status(201).json(postDoc); // 201 Created
    } catch (error) {
        console.error('Error creating about document:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
