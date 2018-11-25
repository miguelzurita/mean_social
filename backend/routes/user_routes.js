var express = require('express');
var UserController = require('../controllers/user_controller');

var api = express.Router();

api.get('/home', UserController.home);
api.get('/pruebas', UserController.pruebas);
api.post('/register', UserController.saveUser);

module.exports = api;