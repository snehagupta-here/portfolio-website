const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testimonialSchema = new Schema({
    author: { type: String, required: true },
    company: { type: String, required: true },
    testimonialimg: {type:String},
    position: { type: String, required: true },
    testimonial: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      }
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
