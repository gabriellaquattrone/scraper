const cheerio = require('cheerio');
const axios = require('axios');

const scrape = new Promise ((resolve, reject) => {
return axios.get('https://www.usatoday.com/tech')
    
    .then(response => {
    
    // Load the entire web page into cheerio
    const $ = cheerio.load(response.data);

    // Targeting the entire article section
    const articleSection = $('div.gnt_m:nth-child(2)');

    // Grabs all the articles off the page
    // Cheerio returned an array of elements with this classname.
    const articleArray = [];

    articleSection.find(".gnt_m_flm_a").each((i, currentArticle) => {

        // Create and article object
        const articleObj = {};

        articleObj.heading = $(currentArticle).text().trim();
        articleObj.info = $(currentArticle).attr('data-c-br');
        articleObj.link = 'https://www.usatoday.com' + $(currentArticle).attr('href');

        // Important debugging for seeing the articles
        // console.log(articleObj);
        
        if (articleObj.heading && articleObj.info && articleObj.link){
            articleArray.push(articleObj);
        }
  
    });
    
    // Debugging
    // console.log(articleArray);
    resolve(articleArray);

}).catch(err => {
    console.error(err);
    return err
}); 
});

module.exports = scrape;