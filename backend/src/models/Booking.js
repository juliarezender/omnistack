const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,   //  id que coloca automaticamente
        ref: 'User'     //  referencia pra qual model é essa informação
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,   //  id que coloca automaticamente
        ref: 'Spot'     //  referencia pra qual model é essa informação
    }
});

module.exports = mongoose.model('Booking', BookingSchema);