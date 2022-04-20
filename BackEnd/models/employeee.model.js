const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    username: {
        type: String,
        required: "This field cannot be empty",
    },
    email: {
        type: String,
        required: "Email can\'t be empty",
        unique: true
    },
    password: {
        type: String,
        required: "Password can\'t be empty",
        minLength: [4, 'Password must be at least 4 characters'],
    },
    role: {
        type: String,
        required: "Please choose a role that you would like to be assigned"
    }
});

employeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');


mongoose.model('Employee', employeeSchema);