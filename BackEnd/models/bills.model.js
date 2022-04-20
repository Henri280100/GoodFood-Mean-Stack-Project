const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
    billName: {
        type: String,
        required: 'Invalid bill name',
    },
    quantity: {
        type: Number,

    }
});