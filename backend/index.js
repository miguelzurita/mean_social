var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mean_social', {useNewUrlParser: true})
	.then(() => {
		console.log("la conexion ok 2");
		//luego de la conexion levantar el server express

		app.listen(port, () => {
			console.log("Servidor ok!");
		});
	})
	.catch(err => console.log(err))
;

