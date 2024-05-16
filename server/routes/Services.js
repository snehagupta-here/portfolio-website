const express=require('express');
const router=express.Router();
const Services=require('../models/Services');
const multer=require('multer');
const uploadmiddleware = multer({dest:'uploads/'});
const fs = require('fs');

  router.post('/', uploadmiddleware.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            const {description,services}=req.body;

            const postDoc = await Services.create({
                // servicesimg: newPath,
                description: description,
                services: services,
            });

        res.json(postDoc);
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const { originalname, path } = req.file;
        const part = originalname.split('.');
        const ext = part[part.length - 1];
        const newPath = path + '.' + ext;

        await fs.rename(path, newPath);

        const { fullname, lastname, title, intro } = req.body;

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


  module.exports=router;