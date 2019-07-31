const router = require("express").Router();
let User = require("../models/User");

// Get All
router.route("/").get((req, res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(400).json(`Error: ${err}`));
});

// Create new user
router.route("/add").post((req, res) => {
	const inputs = req.body;
	const createUser = new User(inputs);
	createUser
		.save()
		.then(() =>
			res.status(201).json("The user have been successflluy created")
		)
		.catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
