const express = require('express');
const router = express.Router();
const Hero = require('../models/Hero');
const multer = require('multer');
const fs = require('fs').promises;

// Multer middleware for file upload
const uploadmiddleware = multer({ dest: 'uploads/' });

// POST route to upload profile picture and other data
router.post('/', uploadmiddleware.single('file'), async (req, res) => {
    try {
        const { fullname, lastname, title, intro } = req.body;

        if (!req.file) {
            const postDoc = await Hero.create({
                fullName: fullname,
                lastName: lastname,
                titles: title,
                introduction: intro
            });

            return res.status(400).json({ error: 'No file uploaded' });
        }

        const { originalname, path } = req.file;
        const part = originalname.split('.');
        const ext = part[part.length - 1];
        const newPath = path + '.' + ext;

        // Rename the file with the correct extension
        await fs.rename(path, newPath);

        const postDoc = await Hero.create({
            profilePicUrl: newPath,
            fullName: fullname,
            lastName: lastname,
            titles: title,
            introduction: intro
        });

        res.json(postDoc);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET route to retrieve all hero data
router.get('/', async (req, res) => {
    try {
        const heroes = await Hero.find();
        res.json(heroes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
