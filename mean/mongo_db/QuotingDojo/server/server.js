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

const Quote = mongoose.model("Quote", QuoteSchema);
const QuoteSchema = new mongoose.Schema(

mongoose.connect("mongodb://localhost/Quotes", { useNewUrlParser: true });
// INTERFACE FOR USER DATABASE DATA
  {
    name: { type: String, required: true, minlength: 1 },
    quote: { type: String, required: true, minlength: 15, maxlength: 150 }
  },
  { timestamps: true }
);

app.get("/", (req, res) => {
  res.render("index");
});



app.listen(8000, () => console.log("listening on port 8000"));
