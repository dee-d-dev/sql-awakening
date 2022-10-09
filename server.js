const express = require("express");
require("dotenv").config();

const postRouter = require("./routes/post.route")

const app = express();

app.use(express.json())

app.use('/api/posts', postRouter)


const PORT = process.env.PORT || 7000
app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
