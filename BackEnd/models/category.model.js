const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: 'This field cannot be empty',
    }

});

mongoose.model('Category', categorySchema);