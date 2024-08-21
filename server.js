let http = require("http");
let fs = require("fs");

const server = http.createServer((req, resp) => {
  resp.setHeader("Content-Type", "text/html");
  // resp.write('<h1>hello,again</h1>')

  fs.readFile("./views/index.html", (err, data) => {
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
