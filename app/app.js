const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const authRoute = require ('./routes/auth');
const authToken = require('./middlewares/authToken');

//create express instance
const App = express();
App.use(express.urlencoded({ extended: false }));

//body-parser configuration
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

//Middleware
App.use(authToken);

//Routes
App.use('/users',userRoutes);
App.use('/auth',authRoute);

//export app to use in server
module.exports = App;