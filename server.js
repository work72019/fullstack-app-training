const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
require("dotenv").config();
const logger = require("morgan");
const Data = require("./data");

const app = express();
app.use(cors());
app.use(express.json());

const APP_PORT = process.env.PORT || 5000;
const DB_URI =
	process.env.DB_URI ||
	"mongodb+srv://fullstack_app:123456Asd@cluster0-pz6hc.mongodb.net/test?retryWrites=true&w=majority";

/* MangoeDB Conecation */
mongoose.connect(DB_URI, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB database connection established successfully");
});

/* Routes */
const usersRoutes = require("./routes/users");
const exerciseRoutes = require("./routes/exercise");
app.use("/exercises", exerciseRoutes);
app.use("/users", usersRoutes);

// launch our backend into a port
app.listen(APP_PORT, () => console.log(`LISTENING ON PORT ${APP_PORT}`));
