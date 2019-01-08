var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');

function home(request, result) {
	result.status(200).send({
		message: 'hola mundo'
	});
}

function pruebas(request, result) {
	// console.log(request.body);
	result.status(200).send({
		message: 'accion nodejs',
		current: 1,
		total: 10,
	});
}

function saveUser(req, res) {
	var params = req.body;
	var user = new User();

	if (params.name && params.surname && params.password) {
		user.name = params.name;
		user.surname = params.surname;
		user.password = params.password;
		user.role = 'ROLE_USER';
		user.image = null;

		bcrypt.hash(params.password, null, null, (error, hash) => {
			user.password = hash;

			user.save((error, userStored) => {
				if (error) return res.status(500).send({message: 'Error'});
				if (userStored) {
					return res.status(200).send({user: userStored});
				} else {
					res.status(200).send({message: 'no se ha registrado'});
				}
			});
		});
	} else {
		res.status(200).send({
			message: 'faltan campos'
		});
	}
}

function loginUser(req, res) {
	var params = req.body;
	var email = params.email;
	var password = params.password;

	User.findOne({email: email}, (err, user) => {
		if (err) return res.status(500).send({message: 'Error en la peticion'});

		if (user) {
			bcrypt.compare(password, user.password, (err, check) => {
				if (check) {
					if (params.gettoken) {

					} else {
						user.password = undefined;
						return res.status(200).send({user})
					}
				}
			})
		}
	})

}

module.exports = {home, pruebas, saveUser};