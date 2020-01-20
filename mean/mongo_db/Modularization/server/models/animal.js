const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema({
  species: String,
  name: String,
  age: Number,
  cuteness: Number
<<<<<<< HEAD
}, {
    timestamps: true
=======
>>>>>>> c79da78d378a74cd58bf19c550855d3e5a3129a1
});

const Animal = mongoose.model("Animal", AnimalSchema);
