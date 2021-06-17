const express = require("express");
const routes = require("./lib/index");
const path = require("path");
const bodyParser = require("body-parser");
const compression = require('compression');

const app = express();
app.use(compression());

app.set("views", path.join(__dirname, "/views"));
app.engine("html", require("ejs").renderFile);
app.set("viewengine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use("/", routes);

module.exports = app;