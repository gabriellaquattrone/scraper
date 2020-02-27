const app = require("express").Router();

const articleRoute = require('./articles');

app.use("/articles", articleRoute);

module.exports = app;