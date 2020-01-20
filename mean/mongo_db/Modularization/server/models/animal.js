const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema({
  species: String,
  name: String,
  age: Number,
  cuteness: Number
}, {
    timestamps: true
});

const Animal = mongoose.model("Animal", AnimalSchema);
