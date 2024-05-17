const express = require('express');
const router = express.Router();
const Services = require('../models/Services');
const multer = require('multer');
const fs = require('fs').promises;  // Use fs.promises for asynchronous file operations

// Multer middleware for file upload
const uploadmiddleware = multer({ dest: 'uploads/' });

// POST route to upload service image and other data
router.post('/', uploadmiddleware.single('file'), async (req, res) => {
    try {
        const { description, services } = req.body;

        if (!req.file) {
            const postDoc = await Services.create({
                description: description,
                services: services,
            });

            return res.status(400).json({ error: 'No file uploaded' });
        }

        const { originalname, path } = req.file;
        const part = originalname.split('.');
        const ext = part[part.length - 1];
        const newPath = path + '.' + ext;

        // Rename the file with the correct extension
        await fs.rename(path, newPath);

        const postDoc = await Services.create({
            servicesimg: newPath,
            description: description,
            services: services,
        });

        res.json(postDoc);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET route to retrieve all service data
router.get('/', async (req, res) => {
    try {
        const services = await Services.find();
        res.json(services);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
