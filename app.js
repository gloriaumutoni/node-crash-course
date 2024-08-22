const express = require("express");
//express app
const app = express();
//listen for requests
app.listen(3000);
let blogs = [
  { title: "luigi", blog: "lorem ipsulm luigi" },
  { title: "mario", blog: "lorem ipsulm mario" },
  { title: " third racer", blogs: "lorem ipsulm third racer" },
];
app.set("view engine", "ejs");
app.get("/", (req, resp) => {
  resp.render("index", { title: "Home", blogs });
});
app.get("/about", (req, resp) => {
  resp.render("about");
});
app.get("/about-us", (req, resp) => {
  resp.redirect("about");
});
app.use((req, resp) => {
  resp.status(404).render("404");
});
