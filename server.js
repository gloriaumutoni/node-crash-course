let http = require("http");
let fs = require("fs");

const server = http.createServer((req, resp) => {
  console.log(req.url, req.method);
  resp.setHeader("Content-Type", "text/html");
  // resp.write('<h1>hello,again</h1>')
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      resp.statusCode=200
      break;
    case "/about":
      path += "about.html";
      resp.statusCode=200
      break;
      case "/about-me":
        resp.setHeader('Location','/about')
      resp.statusCode=301
      break;
    default:
      path += "404.html";
      resp.statusCode=404
      break
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      resp.end();
    } else {
      resp.end(data);
    }
  });
  //   resp.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests");
});
