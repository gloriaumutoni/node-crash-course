const Blog=require('../models/blog')
const blog_index=(req,resp)=>{
    Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      resp.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports={blog_index}