const express=require('express');
const router=express.Router();
const Testimonials=require('../models/Testimonials');
const multer=require('multer');
const uploadmiddleware = multer({dest:'uploads/'});
const fs = require('fs');


  router.post('/', uploadmiddleware.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            const {author,company,position,testimonial}=req.body;

            const postDoc = await Testimonials.create({
                // testimonialimg: newPath,
                author: author ,
                company: company , 
                position: position ,
                testimonial: testimonial,
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

        const postDoc = await Testimonials.create({
            testimonialimg: newPath,
            company: company , 
            position: position ,
            testimonial: testimonial,
        });

        res.json(postDoc);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
  module.exports=router;