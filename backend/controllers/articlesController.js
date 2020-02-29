const db = require("../models");
const scripts = require("../scripts/scrape");
module.exports = {

    findAllArticles: (req, res) => {
        db.Articles.find()
            .populate("comments")
            .then(resultArticles => {
            res.json(resultArticles);
        }) 
    },
    findAllWhereSaved: (req, res) => {
        db.Articles.find({isSaved: true}).then(resultArticles => {
            res.json(resultArticles);
        }) 
    },

    createArticle: (req, res) => {

        // Grab all the articles
        scrape.then(scrapedArticles => {
            // Once we have the articles, we insert them into the database
            db.Articles.insertMany(scrapedArticles).then(insertedArticles => {
                res.json(insertArticles);
            });
        });  
    },
    saveArticle: (req, res) => {

       db.Articles.updateOne(
           
       {
           _id: req.params.articleId
       }, 
       {
            isSaved: true
       }
       ).then(updatedArticle => {
           res.json(updatedArticle);
       });
    },
    
};