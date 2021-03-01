'use_strict';

const navbar = document.getElementById("navbar");

const navbarHTML = 
`<div class="navbar">
    <a id="nav-placeholder"> ;; </a>
    <a href="/" id="nav-home"> Home </a>
    <a href="/about" id="nav-about"> About Me </a>
    <a href="/portfolio" id="nav-portfolio"> Portfolio </a>
    <a href="/resume" id="nav-resume"> Resume </a>
    <a href="/service" id="nav-service"> Service </a>
</div>`;

if (navbar) {
    navbar.innerHTML = navbarHTML;
}