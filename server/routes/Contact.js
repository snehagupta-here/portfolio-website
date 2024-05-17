const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.post('/', async (req, res) => {
    const { email, phone, address } = req.body;

    // Basic validation
    if (!email || !phone || !address) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const postDoc = await Contact.create({ email, phone, address });
        res.status(201).json(postDoc); // 201 Created
    } catch (error) {
        console.error('Error creating contact:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
