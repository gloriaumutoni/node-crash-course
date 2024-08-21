const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, resp) => {
  //lodash
  const num = _.random(0, 20);
  console.log(num);

  //you can't call the function more than once
  const greet = _.once(() => {
    console.log("hello");
  });
  greet();

  //   console.log(req.url, req.method);

  resp.setHeader("Content-Type", "text/html");
  // resp.write('<h1>hello,again</h1>')

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      resp.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      resp.statusCode = 200;
      break;
    case "/about-me":
      resp.setHeader("Location", "/about");
      resp.statusCode = 301;
      break;
    default:
      path += "404.html";
      resp.statusCode = 404;
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      resp.end();
    } else {
      resp.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests");
});
