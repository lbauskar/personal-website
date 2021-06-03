const express = require("express");
const path = require("path");
const navbar = require("./navbar");

const router = express.Router();


router.get("/css/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", req.path))
});

router.get("/img/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", req.path))
});

router.get("/js/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", req.path))
});

router.get("/src/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", req.path))
});

router.get("/vendor/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", req.path))
});

router.get("/favicon/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", req.path))
});


router.get("/", (req, res) => {
    res.render("index.ejs");
});

router.get("/about", (req, res) => {
    res.render(
        "about.ejs",
        {
            navbar: navbar
        }
    );
});

router.get("/portfolio", (req, res) => {
    res.render(
        "portfolio.ejs",
        {
            navbar: navbar
        }
    );
});

router.get("/resume", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "src", "resume.pdf"));
});

router.get("/experience", (req, res) => {
    res.render(
        "experience.ejs",
        {
            navbar: navbar
        }
    );
});

module.exports = router;