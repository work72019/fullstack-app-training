import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/navbar";
import ExercisesList from "./Components/exercises-list";
import EditExercise from "./Components/edit-exercise";
import CreateExercise from "./Components/create-exercise";
import CreateUser from "./Components/create-user";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container">
					<Navbar />
					<br />
					<Route path="/" exact component={ExercisesList} />
					<Route path="/edit/:id" component={EditExercise} />
					<Route
						path="/exercises/create"
						component={CreateExercise}
					/>
					<Route path="/users/create" component={CreateUser} />
				</div>
			</Router>
		);
	}
}

export default App;
