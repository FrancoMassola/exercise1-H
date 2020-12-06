const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const authRoute = require ('./routes/auth');

//create express instance
const App = express();
App.use(express.urlencoded({ extended: false }));

//body-parser configuration
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

//Routes
App.use('/users',userRoutes);
App.use('/auth',authRoute);


//export app to use in server
module.exports = App;