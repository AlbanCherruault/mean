const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const index = require('./routes/index');
const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

mongoose.connect(
  "mongodb+srv://angulardyma:Pookie1234!@cluster0-nr33g.mongodb.net/angulardyma?retryWrites=true&w=majority",
  {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true
  },
  function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Connexion opened to mongodb!");
    }
  }
);


app.use(index);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
