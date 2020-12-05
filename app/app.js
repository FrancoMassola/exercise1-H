const express = require('express');
const bodyParser = require('body-parser');

//create express instance
const App = express();

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

//export app to use in server
module.exports = app;