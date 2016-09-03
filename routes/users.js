var express = require('express');
var router = express.Router();
var database = require('../database.js');
var UserSchema = require('../models/UserSchema.js');


var usersRef = database.ref("root/users");


/* GET user self profile. */
router.get('/:userId', function(req, res, next) {
	// res.send('get user ' + req.params.userId);

	var userRef = usersRef.child(req.params.userId);
	userRef.once("value", function(snapshot) {
		res.json(snapshot.val());
	}, function (errorObject) {
		console.log("The read failed: " + errorObject.code);
		// res.json(errorObject);
		next(errorObject);
	});
});


/* POST users create */
router.post('/', function(req, res, next) {
	var params = req.body;
	params.userId = params.name.replace(/\W+/g, '').toLowerCase(); //remove any NON-alphanumeric character incuding underscore, i.e. [^A-Za-z0-9_]

	usersRef.child(params.userId).once('value', function(snapshot) {
		var exists = (snapshot.val() !== null);
		if(exists){
			//TODO: gen next ava ID, i.e. preceed with 3 digits
			res.send('Error: '+ params.userId + ' already exists in the system.');
		}else{
			var user = new UserSchema(params, function(err, data){
				if(err)	return next(err);
				
				//correct schema
				usersRef.child(params.userId).set(data);
				res.json(data);
			});
		}
	});
});

/* PUT(UPDATE) user */
router.put('/:userId', function(req, res, next) {
	res.send('update user ' + req.params.userId);
});





module.exports = router;
