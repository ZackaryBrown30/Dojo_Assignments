const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
  console.log("client request URL: ", request.url);

  if (request.url === "/") {
    fs.readFile("../views/index.html", "utf8", function(errors, contents) {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(contents); //  send response body
      response.end(); // finished!
    });
  }
  // request didn't match anything:
  else if (request.url === "/ninjas") {
    fs.readFile("ninjas.html", "utf8", (errors, contents) => {
      response.writeHead(200, {
        "Content-type": "text/html"
      });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "../dojos/new") {
    fs.readFile("new.html", "utf8", (errors, contents) => {
      response.writeHead(201, {
        "Content-type": "text/html"
      });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "../stylesheets/style.css") {
    fs.readFile("./stylesheets/style.css", "utf8", function(errors, contents) {
      response.writeHead(200, { "Content-type": "text/css" });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/cars") {
    // notice we won't include the utf8 encoding
    fs.readFile("../images/cars/car1.jpg", function(errors, contents) {
      response.writeHead(200, { "Content-type": "image/jpg" });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/cats") {
    // notice we won't include the utf8 encoding
    fs.readFile("../images/cats/cat1.jpg", function(errors, contents) {
      response.writeHead(200, { "Content-type": "image/jpg" });
      response.write(contents);
      response.end();
    });
  } else if (request.url.startsWith("/images/cats/")) {
    fs.readFile("../" + request.url, function(errors, contents) {
      response.writeHead(200, { "Content-type": "image/jpg" });
      response.write(contents);
      response.end();
    });
  } else {
    response.end("File not found!!");
  }
});

server.listen(7077);
console.log("Running in localhost at port 7077");
