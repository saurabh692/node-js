const mongoose = require("./node_modules/mongoose");
const blog = new mongoose.Schema({
  blog: String,
});

const author = new mongoose.Schema({
  author: String,
});
module.exports = {
  Blog: mongoose.model("blog", blog),
  Author: mongoose.model("author", author),
};
