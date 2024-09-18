const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("hello iam server");
  }
  if (req.url == "/about") {
    res.end("this is about page");
  }
  res.end(`<h1>oops! errror occured</h1>
    <a href="/">back home</a>
    `);
});
server.listen(5000);
