const db = require("../models");
const scripts = require("../scripts/scrape");
module.exports = {

    createArticle: (req, res) => {
        const scrapedArticles = scripts.scrape();

        console.log(scrapedArticles);
        res.json(scrapedArticles);
    }
};