const mongoose = require('mongoose');
const dburl = 'mongodb+srv://snehagupta8527027216:hf2LCME3qydPRR5S@cluster0.j29ks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
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

module.exports = connectDB;