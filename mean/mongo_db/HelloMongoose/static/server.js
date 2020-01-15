const mongoose = require("mongoose");

const express = require("express");
const app = express();

app.use(express.static(__dirname + "static"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/Users", { useNewUrlParser: true });
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});
// INTERFACE FOR USER DATABASE DATA ABOVE
const User = mongoose.model("User", UserSchema);
