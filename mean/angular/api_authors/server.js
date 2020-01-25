const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public/dist/public")));

require("./server/config/mongoose");

app.use(express.static(__dirname + "/public/dist/public"));

//Mongoose
require("./server/config/mongoose.js");
// Routes
require("./server/config/routes.js")(app);
// Catch all remaining routes
app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/dist/public/index.html"));
});

app.listen(8000, () => console.log("listening on port 8000"));
