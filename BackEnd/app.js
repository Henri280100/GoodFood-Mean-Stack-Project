require('../config/config');
require('../BackEnd/models/dbConnection');


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();
const routerIndex = require('./routes/index.router');
// const db = require('../BackEnd/models/dbConnection');
// db.connect();

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api', routerIndex);
// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));