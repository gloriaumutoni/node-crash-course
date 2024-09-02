const express = require("express");
const Blog = require("../models/blog");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});
router.get("/blogs", blogController.blog_index);

router.post("/blogs", (req, resp) => {
  const Blog = new Blog(req.body);
  Blog.save()
    .then((result) => {
      resp.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/blogs/:id", (req, resp) => {
  const { id } = req.params;
  Blog.findById(id)
    .then((result) => {
      resp.render("partials/details", {
        blog: result,
        title: "Blog Details",
        id,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/blogs/:id", (req, resp) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => resp.json({ redirect: "/blogs" }))
    .then((err) => {
      console.log(err);
    });
});

router.get("/about", (req, resp) => {
  resp.render("about");
});
router.get("/about-us", (req, resp) => {
  resp.redirect("about");
});
router.get("/all-blogs", (req, resp) => {
  Blog.find()
    .then((result) => resp.send(result))
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
