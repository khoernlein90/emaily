const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ bye: "there" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("we running");
});
