// Declared mongoose variable
const mongoose = require('mongoose');

// check the connection from the mongodb
mongoose.connect(process.env.MONGODB_URL, (err) => {
    if (!err) {
        console.log("Connect to MongoDB Succeeded");
    } else {
        console.log('Connect to MongoDB Failure');
        console.log('Failed at ' + JSON.stringify(err, undefined, 2))
    }
});

require('./user.model')
require('./employeee.model.js')