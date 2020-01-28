const path = require("path");
const fs = require("fs");

var models_path = path.join(__dirname, "./../models");

fs.readdirSync(models_path).forEach(function(file) {
  if (file.indexOf(".js") >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + "/" + file);
  }
});
_______________________________________________;
module.exports = {
  index: (req, res) => {
    Old.find()
      .then(oldies => res.json(oldies))
      .catch(err => res.json(err));
  },
  getOldie: (req, res, id) => {
    Old.findOne({ _id: req.params.name })
      .then(oldies => res.json(oldies))
      .catch(err => res.json(err));
  },
  create: (req, res) => {
    const OldieData = req.body;
    Old.create(OldieData)
      .then(data => {
        res.json();
      })
      .catch(err => res.json(err));
  }
};

const mongoose = require("mongoose");
Old = mongoose.model("Old");
const oldies = require("../controller/oldies.js");

module.exports = function(app) {
  app.get("/", (req, res) => {
    oldies.index(req, res);
  });
  app.get("/oldie/:id", (req, res) => {
    oldies.getOldie(req, res);
  });
  app.post("/oldies", (req, res) => {
    oldies.create(req, res);
  });
};
