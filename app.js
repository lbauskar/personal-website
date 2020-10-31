const express = require("express");
const routes = require("./routes/index");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.set("views", path.join(__dirname, "/views"));
app.engine("html", require("ejs").renderFile);
app.set("viewengine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use("/", routes);

module.exports = app;