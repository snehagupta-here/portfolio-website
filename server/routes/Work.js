const express = require('express');
const router = express.Router();
const Work = require('../models/Work');
const multer = require('multer');
const fs = require('fs').promises; // Use fs.promises for asynchronous file operations

// Multer middleware for file upload
const uploadmiddleware = multer({ dest: 'uploads/' });

// GET route to fetch all work data
router.get('/', async (req, res) => {
    try {
        const work = await Work.find();
        res.json(work);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST route to upload project image and other data
router.post('/', uploadmiddleware.single('file'), async (req, res) => {
    try {
        const { projects } = req.body;

        if (!req.file) {
            const postDoc = await Work.create({
                projects: projects,
            });

            return res.status(400).json({ error: 'No file uploaded' });
        }

        const { originalname, path } = req.file;
        const part = originalname.split('.');
        const ext = part[part.length - 1];
        const newPath = path + '.' + ext;

        // Rename the file with the correct extension
        await fs.rename(path, newPath);

        const postDoc = await Work.create({
            projectimg: newPath,
            projects: projects
        });

        res.json(postDoc);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
