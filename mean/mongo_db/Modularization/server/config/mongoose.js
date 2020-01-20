<<<<<<< HEAD
const path = require('path')
const fs = require('fs')

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
})

=======
const path = require("path");
const fs = require("fs");

var models_path = path.join(__dirname, "./../models");
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if (file.indexOf(".js") >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + "/" + file);
  }
});
>>>>>>> c79da78d378a74cd58bf19c550855d3e5a3129a1
