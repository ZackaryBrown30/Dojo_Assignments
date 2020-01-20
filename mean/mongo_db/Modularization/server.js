const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("express-flash");

app.use(flash());
app.set("view engine", "ejs");
app.set("views", __dirname + "/client/views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/client/static"));
app.use(
  session({
    secret: "keyboardkitteh",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);

mongoose.connect("mongodb://localhost/Animals", { useNewUrlParser: true });
const AnimalSchema = new mongoose.Schema({
  species: String,
  name: String,
  age: Number,
  cuteness: Number
});

const Animal = mongoose.model("Animal", AnimalSchema);

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8000, () => console.log("listening on port 8000"));
