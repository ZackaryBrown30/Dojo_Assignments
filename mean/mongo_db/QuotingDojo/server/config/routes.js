const mongoose = require("mongoose"),
  Quote = mongoose.model("Quote");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/quotes", (req, res) => {
    Quote.find()
      .then(data => res.render("quotes", { Quote: data }))
      .catch(err => res.json(err));
  });

  app.post("/posty", (req, res) => {
    const quoteData = new Quote(req.body);
    quoteData
      .save()
      .then(() => res.redirect("/quotes"))
      .catch(err => {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash("quote", err.errors[key].message);
        }
        res.redirect("/");
      });
  });
};
