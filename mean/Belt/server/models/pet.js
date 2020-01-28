const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3
    },
    description: {
      type: String,
      required: true,
      minlength: 6
    },
    type: {
      type: String,
      required: true,
      minlength: 3
    },
    likes: {
      type: Number,
      required: true,
      optional: 0
    },
    skills: {
      type: String,
      optional: "",
      minlength: 3
    }
  },
  {
    timestamps: true
  }
);

const pet = mongoose.model("pet", PetSchema);
