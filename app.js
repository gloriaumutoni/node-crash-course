const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const { result } = require("lodash");
const blogRoutes=require('./routes/blogroutes')
//express app
const app = express();
//listen for requests

// connecting database
const dbURI =
  "mongodb+srv://gloriaumutoni54:fFF2RWZYkKFP1p6o@cluster0.8k6l5.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(dbURI)
  .then((result) => 
    {
console.log("going to listen");
      
      app.listen(3000)
    })
  .catch((err) => err);
const blogs = [
  { title: "luigi", blog: "lorem ipsulm luigi" },
  { title: "mario", blog: "lorem ipsulm mario" },
  { title: " third racer", blogs: "lorem ipsulm third racer" },
];
app.set("view engine", "ejs");
//middleware and static file
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
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


app.get("/single-blog", (req, resp) => {
  Blog.findById("66cd7320951703e0da4ae5c2")
    .then((result) => resp.send(result))
    .catch((err) => {
      console.log(err);
    });
});
app.use((req,resp) => {
  console.log('-------')
  resp.status(404).render("404");
});
app.use("/blogs", blogRoutes)
//4040 page