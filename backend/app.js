var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
var user_routes = require('./routes/user_routes');

//middlewares

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//CORS

//rutas
app.use('/api', user_routes);

//export
module.exports = app;