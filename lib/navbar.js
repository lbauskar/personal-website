'use_strict';

const navbar = `
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarContent">
        <div class="navbar-nav">
            <a class="nav-item nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="/about">About</a>
            <a class="nav-item nav-link" href="/resume">Resume</a>
            <a class="nav-item nav-link" href="/portfolio">Portfolio</a>
            <a class="nav-item nav-link" href="/experience">Experience</a>
        </div>
    </nav>
`;


module.exports = navbar;