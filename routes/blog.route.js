const { BlogModel } = require("../models/blog.model");

const { Router } = require("express");
const blogController = Router();

blogController.get("/", async (req, res) => {
  const blogs = await BlogModel.find();
  res.send(blogs);
});
// blogController.get("/", async (req, res) => {
//   const { Category } = req.query;
//   console.log(Category);
//   const blogs = await BlogModel.find({ Category: Category });
//   res.send(blogs);
// });

blogController.post("/create", async (req, res) => {
  const { Title, Category, Author, Content } = req.body;

  const blog = new BlogModel({ Title, Category, Author, Content });
  try {
    await blog.save();
    res.send("blog created successfully");
  } catch (e) {
    console.log("Something went wrong");
  }
});

blogController.patch("/edit/:blogId", async (req, res) => {
  const blogId = req.params.blogId;
  const edited = await BlogModel.findByIdAndUpdate(
    { _id: blogId, userId: req.body.userId },
    {
      Title: req.body.Title,
      Category: req.body.Category,
      Author: req.body.Author,
      Content: req.body.Content,
    }
  );

  if (edited) res.send("Blog edited");
  else res.send("Something went wrong");
});

blogController.delete("/delete/:blogId", async (req, res) => {
  const blogId = req.params.blogId;
  const deletedBlog = await BlogModel.findOneAndDelete({
    _id: blogId,
    userId: req.body.userId,
  });

  if (deletedBlog) res.send("Blog Deleted");
  else res.send("Something went wrong");
});
module.exports = { blogController };
