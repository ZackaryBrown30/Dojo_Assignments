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

mongoose.connect("mongodb://localhost/Wall", { useNewUrlParser: true });

const CommentSchema = new mongoose.Schema(
  {
    comment: { type: String, required: [true, "Users must provide a Name"] }
  },
  { timestamps: true }
);

const UserSchema = new mongoose.Schema(
  {
    message: { type: String, required: [true, "Message is Required"] },
    name: { type: String, required: [true, "Users must provide a Name"] },
    comment: [CommentSchema]
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", UserSchema);
const Comment = mongoose.model("Comment", CommentSchema);

// Use the session middleware
app.use(session({ secret: "keyboard cat", cookie: { maxAge: 60000 } }));

// Access the session as req.session
/*
app.get("/", function(req, res, next) {
  if (req.session.views) {
    req.session.views++;
    res.setHeader("Content-Type", "text/html");
    res.write("<p>views: " + req.session.views + "</p>");
    res.write("<p>expires in: " + req.session.cookie.maxAge / 1000 + "s</p>");
    Message.find()
      .then(data => res.render("index", { posts: data }))
      .catch(err => res.json(err));
  } else {
    req.session.views = 1;
    Message.find()
      .then(data => res.render("index", { posts: data }))
      .catch(err => res.json(err));
  }
}); */

app.get("/", (req, res) => {
  Message.find()
    .then(data => res.render("index", { posts: data }))
    .catch(err => res.json(err));
});
/* DATA IS PASSED HERE AS "posts" */

app.post("/msg", (req, res) => {
  const msg = new Message();
  msg.name = req.body.name;
  msg.message = req.body.message;
  msg.comment = Message.findOne({ _id: id });
  msg
    .save()
    .then(data => res.redirect("/"))
    .catch(err => {
      console.log("We have an error!");
      res.redirect("/");
    });
});

app.post("/comment/:id", (req, res) => {
  const cmt = new Comment();
  cmt.name = req.body.name;
  cmt.comment = req.body.comment;
  cmt
    .save()
    .then(data => res.redirect("/"))
    .catch(err => {
      console.log("We have an error!");
      res.redirect("/");
    });
});

/* NEED TO SETUP FLASH ERRORS */

app.listen(8000, () => console.log("listening on port 8000"));
