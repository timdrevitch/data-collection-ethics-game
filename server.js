const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const gameRoute = require("./Routes/gameRoute");
const PORT = process.env.PORT || 4000;
const app = express();

// set up rate limiter: maximum of 5000 requests per minute
// var RateLimit = require("express-rate-limit")
// var limiter = RateLimit({
//   windowMs: 1 * 60 * 1000, // 1 minute
//   max: 5000,
// })

// app.use(limiter)
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));

//connect to the db
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to the MongoDB database!");
});

//data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", gameRoute);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Connected to server on port ${PORT}!`);
});
