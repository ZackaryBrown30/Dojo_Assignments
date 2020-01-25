const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");

mongoose.connect("mongodb://localhost/authors", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const models_path = path.join(__dirname, "../models");

fs.readdirSync(models_path).forEach(file => {
  if (file.includes(".js")) {
    require(path.join(models_path, file));
  }
});
