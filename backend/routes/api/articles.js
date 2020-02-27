const app = require("express").Router();
const articleController = require('../../controllers/articlesController');
app
    .route('/')
    .get(articleController.findAllArticles)
    .post(articleController.createArticle)
    .put()
    .delete();

module.exports = app;