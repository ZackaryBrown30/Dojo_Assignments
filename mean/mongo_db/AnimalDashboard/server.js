/*
GET '/mongooses/edit/:id' Should show a form to edit an existing mongoose.
POST '/mongooses/:id' Should be the action attribute for the form in the above route (GET '/mongooses/edit/:id').
POST '/mongooses/destroy/:id' Should delete the mongoose from the database by ID.
*/


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("express-flash");

app.use(flash());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "."));
app.use(session({
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
    age: Date,
    cuteness: Number
});
// INTERFACE FOR USER DATABASE DATA ABOVE
const Animal = mongoose.model("Animal", AnimalSchema);

app.get("/", (req, res) => {
  Animal.find()
    .then(data => res.render("index", { animals: data }))
    .catch(err => res.json(err));
});

app.get('/animal/:id', (req, res) => {
    Animal.findOne({_id: req.param.id})
        .then(data => res.render('individual', { animal: data}))
        .catch(err => res.json(err));
});

app.get("/button", (req, res) => {
    res.render('new')
  });

app.post("/animal", (req, res) => {
  const animal = new Animal();
  animal.name = req.body.name;
  animal.age = req.body.age;
  animal.cuteness = req.body.cuteness;
  animal.species = req.body.species;
  animal
    .save()
    .then(newAnimalData =>  res.redirect('/'), console.log("animal created: ", newAnimalData))
    .catch(err => {
        console.log("We have an error!", err);
        for (var key in err.errors) {
          req.flash("quote", err.errors[key].message);
        }
        res.redirect("/");
      });
});



app.listen(8000, () => console.log("listening on port 8000"));
