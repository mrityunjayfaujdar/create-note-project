const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/create-notes-app-project");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to the DB"));

db.once("open", function () {
    console.log("Connected to the DB: MongoDB");
});

module.exports = db;
