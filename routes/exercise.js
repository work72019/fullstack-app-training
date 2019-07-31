const router = require("express").Router();
let Exercise = require("../models/Exercise");

// Find all
router.route("/").get((req, res) => {
	Exercise.find()
		.then(users => res.json(users))
		.catch(err => res.status(400).json(`Error: ${err}`));
});

// Find an exercise by :id
router.route("/:id").get((req, res) => {
	Exercise.findById(req.params.id)
		.then(exercise => {
			res.status(200).json(exercise);
		})
		.catch(err => res.status(400).json(`Error: ${err}`));
});

// Create new exercise
router.route("/add").post((req, res) => {
	const username = req.body.username;
	const description = req.body.description;
	const duration = Number(req.body.duration);
	const date = Date.parse(req.body.date);

	const newExercise = new Exercise({
		username,
		description,
		duration,
		date
	});
	newExercise
		.save()
		.then(() => res.status(201).json("The exercise successfully added."))
		.catch(err => res.status(400).json(`Error ${err}`));
});

// Deleting an exercise by :id
router.route("/delete/:id").delete((req, res) => {
	Exercise.findByIdAndRemove(req.params.id).then(() =>
		res.json("Exercise is successfully removed.").catch(err => {
			res.status(400).json(`Error: ${err}`);
		})
	);
});

// Updateing an exercise by :id
router.route("/update/:id").post((req, res) => {
	const inputs = req.body;
	Exercise.findById(req.params.id)
		.then(exercise => {
			exercise.username = inputs.username;
			exercise.description = inputs.description;
			exercise.duration = inputs.duration;
			exercise.date = inputs.date;
			exercise
				.save()
				.then(() => res.status(201).json("Successfully updated."))
				.catch(err => res.status(400).json(`Error: ${err}`));
		})
		.catch(err => res.status(400).json(`Error: ${err}`));
});
module.exports = router;
