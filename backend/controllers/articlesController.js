const db = require("../models");
const scripts = require("../scripts/scrape");
module.exports = {

    findAllArticles: (req, res) => {
        db.Articles.find().then(resultArticles => {
            res.json(resultArticles);
        }) 
    }
    createArticle: (req, res) => {

        // Grab all the articles
        scrape.then(scrapedArticles => {
            // Once we have the articles, we insert them into the database
            db.Articles.insertMany(scrapedArticles).then(insertedArticles => {
                res.json(insertArticles);
            });
        });  
    }
};