const express = require("./node_modules/express");
const mongoose = require("./node_modules/mongoose");
const { Blog, Author } = require("./index");
const app = express();

app.use(express.json());

app.get("/blog", async (req, res) => {
  const blogData = await Blog.find();
  res.send(blogData);
});
app.get("/author", async (req, res) => {
  const authorData = await Author.find();
  res.send(authorData);
});

app.post("/blog", async (req, res) => {
  const blog = new Blog(req.body);
  const id = await blog.save();
  blog.id = id;
  return res.send(blog);
});

app.post("/author", async (req, res) => {
  const author = new Author(req.body);
  const id = await author.save();
  author.id = id;
  return res.send(author);
});

mongoose.connect(
  `mongodb+srv://saurabhk:saurabh@cluster0.0f6bu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  (err) => {
    if (err) return;
    app.listen(3000, () => console.log(`success`));
  }
);
