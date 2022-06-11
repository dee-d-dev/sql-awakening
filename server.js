const express = require("express");
const app = express();
require("dotenv").config();
const post_route = require("./routes/postRoute");

app.use(express.json());

app.get("/home", (req, res) => {
  res.send("SQL home");
});
app.post("/blog", post_route);

const PORT = process.env.PORT || 9000;

try {
  app.listen(PORT, () => {
    console.log("running");
  });
} catch (err) {
  console.log(err);
}
