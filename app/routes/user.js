const express = require('express');
const userController = require('../controllers/userController');

const Router = express.Router();

Router.get('/',userController.index); //index users list
      //.post('/');



module.exports = Router;