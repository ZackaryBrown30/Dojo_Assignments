const express = require("express");
const app = express();

// INDEX route

app.get("/", (request, response) => {
  response.send("Cars && Cats");
});

app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/static"));
app.listen(8000, () => console.log("listening on port 8000"));
