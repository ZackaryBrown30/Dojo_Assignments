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
app.post('/oldies', (req, res) => {
    oldies.create(req, res);
    });
};
