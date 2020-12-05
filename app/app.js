const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');

//create express instance
const App = express();
App.use(express.urlencoded({ extended: false }));

//body-parser configuration
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));


App.use('/users',userRoutes);


//export app to use in server
module.exports = App;