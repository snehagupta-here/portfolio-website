const express = require('express');
// const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const titleRoutes = require('./routes/titleRoutes');
const introductionRoutes = require('./routes/introductionRoutes');
const bioRoutes = require('./routes/bioRoutes');
const skillsRoutes = require('./routes/skillsRoutes');
const professionalExperienceRoutes = require('./routes/professionalExperienceRoutes');
const achievementRoutes = require('./routes/achievementRoutes');
const serviceDescriptionRoutes = require('./routes/serviceDescriptionRoutes');
const testimonialsRoutes = require('./routes/testimonialsRoutes');
const worksRoutes = require('./routes/worksRoutes');
const contactRoutes = require('./routes/contactRoutes');
const profileRoutes = require('./routes/profileRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const projectsRoutes = require('./routes/projectsRoutes');
const firstnameRoutes = require('./routes/firstnameRoutes');
const lastnameRoutes = require('./routes/lastnameRoutes');
const cors = require("cors");
const app = express();
const fs = require('fs');
const multer = require("multer");
const path = require("path");
const mongoose = require('mongoose');
require('dotenv').config();

const dburl = process.env.ATLASDB_URL;
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        
        // const uri = 'mongodb://127.0.0.1:27017/admin';
       
        await mongoose.connect(dburl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log('DB Connected',dburl);
    } catch (err) {
        console.error('Error connecting to the database', err);
    }
};

// Connect to MongoDB
connectDB();
app.use(cors());
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   credentials: true
// };

// app.use(cors(corsOptions));
// Middleware to parse JSON bodies


app.use(express.json());
// Configure multer
const upload = multer();
const uploadPath = path.join(__dirname, '..', 'uploads', 'profiles');

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}
// Rou
// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/Hero/users', userRoutes);
app.use('/api/Hero/titles', titleRoutes);
app.use('/api/Hero/introduction', introductionRoutes);
app.use('/api/Hero/profilepic', profileRoutes);
app.use('/api/Hero/firstname', firstnameRoutes);
app.use('/api/Hero/lastname', lastnameRoutes);
app.use('/api/About/bio', bioRoutes);
app.use('/api/About/skills', skillsRoutes);
app.use('/api/About/professional-experience', professionalExperienceRoutes);
app.use('/api/About/achievement', achievementRoutes);
app.use('/api/About/resume', resumeRoutes);
app.use('/api/Services/service-description', serviceDescriptionRoutes);
app.use('/api/Services/works', worksRoutes);
app.use('/api/work/projects', projectsRoutes);
app.use('/api/testimonials', testimonialsRoutes); 
app.use('/api/contact', contactRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
