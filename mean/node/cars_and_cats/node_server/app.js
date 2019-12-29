const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    console.log('client request URL: ', request.url);

    // this is how we do routing:
    if (request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            }); // send data about response
            response.write(contents); //  send response body
            response.end(); // finished!
        });
    }
    // request didn't match anything:
    else if (request.url === "/ninjas") {
        fs.readFile(
            'ninjas.html', 'utf8', (errors, contents) => {
                response.writeHead(200, {
                    'Content-type': 'text/html'
                });
                response.write(contents);
                response.end();
            });
    } else if (request.url === "/dojos/new") {
        fs.readFile(
            'new.html', 'utf8', (errors, contents) => {
                response.writeHead(201, {
                    'Content-type': 'text/html'
                });
                response.write(contents);
                response.end();
            });
    } else {
        response.end('File not found!!');
    }
});

server.listen(6789);
console.log("Running in localhost at port 6789");