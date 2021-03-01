const express = require("express");
const { join } = require("path");
const path = require("path");
const app = require("../app");

const router = express.Router();


router.get("/css/*", (req, res) => {
    res.sendFile(path.join(__dirname, req.path))
});

router.get("/img/*", (req, res) => {
    res.sendFile(path.join(__dirname, req.path))
});

router.get("/js/*", (req, res) => {
    res.sendFile(path.join(__dirname, req.path))
});

router.get("/src/*", (req, res) => {
    res.sendFile(path.join(__dirname, req.path))
});

router.get("/", (req, res) => {
    res.render("index.html");
});

router.get("/index", (req, res) => {
    res.redirect("/");
})

router.get("/about", (req, res) => {
    res.render("about.html");
});

router.get("/portfolio", (req, res) => {
    res.render("portfolio.html");
});

router.get("/resume", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "resume.pdf"));
});

router.get("/service", (req, res) => {
    res.render("service.html");
});

module.exports = router;