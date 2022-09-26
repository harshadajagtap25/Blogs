const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  Title: String,
  Category: String,
  Author: String,
  Content: String,
  //   Image: JPEG,
});

const BlogModel = mongoose.model("blog", blogSchema);
module.exports = {
  BlogModel,
};
