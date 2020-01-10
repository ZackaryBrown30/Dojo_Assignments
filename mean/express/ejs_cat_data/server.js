const express = require("express");
const app = express();
const session = require("express-session");

app.get("/", (request, response) => {
  response.send("Hello Express");
});

app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/users", (req, res) => {
  // hard-coded user data
  var users_array = [
    { name: "Michael", email: "michael@codingdojo.com" },
    { name: "Jay", email: "jay@codingdojo.com" },
    { name: "Brendan", email: "brendan@codingdojo.com" },
    { name: "Andrew", email: "andrew@codingdojo.com" },
    { name: "Zackary", email: "zackadamianut@gmail.com" },
    { name: "Dumbroqski", email: "AndyDumby@gmail.com" }
  ];
  res.render("users", { users: users_array });
});

app.get("/cats", (req, res) => {
  var Kats = [
    { name: 1, image: "static/images/cats/cat1.jpg", fav_food: "Salmon" },
    {
      name: 2,
      image: "static/images/cats/cat2.jpg",
      fav_food: "Defenseless Animals"
    }
  ];

  res.render("cats", { kitty: Kats });
});

app.get("/cats", (req, res) => {
  res.render("cats");
});

app.get("/cars/new", (req, res) => {
  res.render("form");
});

app.listen(8000, () => console.log("listening on port 8000"));

const express = require("express");
const app = express();

app.listen(8000, () => console.log("listening on port 8000"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/static"));

app.get("/cats", (req, res) => {
  res.render("cats");
});

app.get("/cats/wiley", (req, res) => {
  var cuddles = [{ name: "Wiley", fav_food: "Cheese Burgers", age: "15" }];
  res.render("details", { cats: cuddles });
});

app.get("/cats/cuddles", (req, res) => {
  var cuddles = [{ name: "Cuddles", fav_food: "Pesto Pasta", age: "10" }];
  res.render("details", { cats: cuddles });
});

app.get("/cats/angel", (req, res) => {
  var cuddles = [{ name: "Angel", fav_food: "Steak Tacos", age: "5" }];
  res.render("details", { cats: cuddles });
});
