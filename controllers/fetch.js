
var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeHeadlines: function(req, res) {

    return scrape()
      .then(function(articles) {

        return db.Headline.create(articles);
      })
      .then(function(dbHeadline) {
        if (dbHeadline.length === 0) {
          res.json({
            message: "No new articles...."
          });
        }
        else {

          res.json({
            message: "Grabbed " + dbHeadline.length + " new articles - have at em"
          });
        }
      })
      .catch(function(err) {

        res.json({
          message: "Scrapeddddd"
        });
      });
  }
};
