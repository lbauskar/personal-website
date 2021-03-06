const express = require('express');
const path = require('path');

const router = express.Router();
const tiles = require('./tileAndModal');
const stars = require('./stars');


router.get('/css/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', req.path));
});

router.get('/img/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', req.path));
});

router.get('/js/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', req.path));
});

router.get('/src/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', req.path));
});

router.get('/vendor/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', req.path));
});

router.get('/favicon/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', req.path));
});

router.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'src', 'Resume.pdf'));
});

router.get('/robots.txt', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'robots.txt'));
});

router.get('/sitemap.xml', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'sitemap.xml'));
});

router.get('/', (req, res) => {
    res.render('index.ejs', {
        stars: stars,
        projects: tiles.projects,
        experiences: tiles.experiences
    });
});


module.exports = router;




