const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("express-flash");

app.use(flash());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.use(
  session({
    secret: "keyboardkitteh",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);

mongoose.connect("mongodb://localhost/Quotes", { useNewUrlParser: true });

const QuoteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 1 },
    quote: { type: String, required: true, minlength: 15, maxlength: 150 }
  },
  { timestamps: true }
);
const Quote = mongoose.model("Quote", QuoteSchema);

app.get("/", (req, res) => {
  Quote.find()
    .then(data => 
      res.render("index", 
      {quotes: data}))
      .catch(err => res.json(err));
    });

app.post("/posty", (req, res) => {
  const quoteData = new Quote(req.body);
  quoteData
    .save()
    .then(() => res.redirect("/quotes"))
    .catch(err => {
      console.log("We have an error!", err);
      for (var key in err.errors) {
        req.flash("quote", err.errors[key].message);
      }
      res.redirect("/");
    });
});

app.get("/quotes", (req, res) => {
  Quote.find()
    .then(data => res.render("quotes", { Quote: data }))
    .catch(err => res.json(err));
});

app.listen(8000, () => console.log("listening on port 8000"));