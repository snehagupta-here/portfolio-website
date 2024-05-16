const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    description: { type: String, required: true },
    services: [{
        name: { type: String, required: true },
        detail: { type: String, required: true },
        servicesimg: {type:String}
    }],
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
