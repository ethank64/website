const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write(`Page not found (404)\n${err}`);
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, err =>{
  if (err) {
    console.log(`We had an oopsie:\n${err}`);
  } else {
    console.log(`Success! Running on port ${port}`);
  }
});