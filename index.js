require('dotenv').config()
const express = require("express");
const app = express();
// const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/login", (req, res) => {
  res.send("<h1>Logged in</h1>");
});
app.get("/twitter", (req, res) => {
  res.send("Vivek");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
