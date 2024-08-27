const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const { result } = require("lodash");
//express app
const app = express();
//listen for requests

// connecting database
const dbURI =
  "mongodb+srv://gloriaumutoni54:fFF2RWZYkKFP1p6o@cluster0.8k6l5.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => err);
let blogs = [
  { title: "luigi", blog: "lorem ipsulm luigi" },
  { title: "mario", blog: "lorem ipsulm mario" },
  { title: " third racer", blogs: "lorem ipsulm third racer" },
];
app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/add-blog", (req, resp) => {
  const blog = new Blog({
    title: "new Blog 3",
    snippet: "about my new blog",
    body: "more about my new blog",
  });
  blog
    .save()
    .then((result) => resp.send(result))
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, resp) => {
  resp.redirect("/blogs");
});
app.get("/blogs", (req, resp) => {
  Blog.find().sort({createdAt:-1})
    .then((result) => {
      resp.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/about", (req, resp) => {
  resp.render("about");
});
app.get("/about-us", (req, resp) => {
  resp.redirect("about");
});
app.get("/all-blogs", (req, resp) => {
  Blog.find()
    .then((result) => resp.send(result))
    .catch((err) => {
      console.log(err);
    });
});
app.get("/single-blog", (req, resp) => {
  Blog.findById("66cd7320951703e0da4ae5c2")
    .then((result) => resp.send(result))
    .catch((err) => {
      console.log(err);
    });
});

app.use((req, resp) => {
  resp.status(404).render("404");
});
