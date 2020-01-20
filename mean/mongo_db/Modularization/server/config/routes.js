const mongoose = require("mongoose");
Animal = mongoose.model("Animal");
const animals = require("../controller/animals.js");

module.exports = function(app) {
  app.get("/", (req, res) => {
    animals.index(req, res);
  });

  app.get("/animal/:name", (req, res) => {
    animals.getAnimal(req, res);
  });

  app.get("/button", (req, res) => {
    res.render("new");
  });

  app.post("/animal", (req, res) => {
    animals.form_acceptinator_model_polulator(req, res);
  });

  app.get("/destroy/:_id", (req, res) => {
    animals.burn_it_with_fire(req, res);
  }); // all other routes
};
