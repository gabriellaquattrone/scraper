const app = require("express").Router();
const articleController = require('../../controllers/articlesController');
app
    .route('/')
    .get()
    .post()
    .put()
    .delete();

module.exports = app;