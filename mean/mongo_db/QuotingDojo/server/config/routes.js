
mongoose.connect("mongodb://localhost/Quotes", { useNewUrlParser: true });
// INTERFACE FOR USER DATABASE DATA
const QuoteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 1 },
    quote: { type: String, required: true, minlength: 15, maxlength: 150 }
  },
  { timestamps: true }
);

app.get("/", (req, res) => {
  res.render("index");
});

const Quote = mongoose.model("Quote", QuoteSchema);

app.post("/quotes", (req, res) => {
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
    .sort("-createdAt")
    .then(data => res.render("quotes", { Quote: data }, console.log(Quote)))
    .catch(err => res.json(err));
});