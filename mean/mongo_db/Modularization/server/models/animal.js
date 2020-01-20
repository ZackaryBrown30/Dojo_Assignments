const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema({
  species: String,
  name: String,
  age: Number,
  cuteness: Number
});

const Animal = mongoose.model("Animal", AnimalSchema);
