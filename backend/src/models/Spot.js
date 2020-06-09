const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,   //  id que coloca automaticamente
        ref: 'User'     //  referencia pra qual model é essa informação
    }
});

module.exports = mongoose.model('Spot', SpotSchema);