const express = require("express");

const app = express();

app.all("*", (req, res) => {
  res.send(new Date());
});

app.listen(3000, () => {
  console.log("Server is runnin on http://127.0.0.1:3000/");
});
