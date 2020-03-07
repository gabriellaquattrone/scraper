// Dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose")
const routes = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

// Initialize Express
const app = express();

// For parsing json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Debugging
// console.log(process.env.MONGODB_URI);

// Connect to mongo
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Listen on port 3000
app.listen(PORT, function() {
  console.log(`App running on port : ${PORT}`);
});
