const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const router = require("./routes/contactRoutes");
app.use(express.json());
app.use(cors());
app.get("/", function (req, res) {
  res.send("hello");
});
app.use("/api", router);
app.listen(8000, function (req, res) {
  console.log("server run at 8000");
});
