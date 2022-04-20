const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: 'Please provide a name for this product.'
    },
    category: {
        type: String,
        required: 'Category cannot be empty.'
    },
    price: {
        type: Number,
        required: 'Price cannot be negative',
    },
    img: {
        data: Buffer,
    }
});

mongoose.model('Products', productSchema);