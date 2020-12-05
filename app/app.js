const express = require('express');
const bodyParser = require('body-parser');

//create express instance
const App = express();

//body-parser configuration
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));


//export app to use in server
module.exports = App;