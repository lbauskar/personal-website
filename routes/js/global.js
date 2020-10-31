let GlobalHTML = { //adds HTML that should go on every webpage 
    navbar: document.getElementById("navbar"),

    navbarHTML:
    `<div class="navbar">
        <a id="nav-placeholder"> ;; </a>
        <a href="index.html" id="nav-home"> Lalit Bauskar </a>
        <a href="about.html" id="nav-about"> About Me </a>
        <a href="portfolio.html" id="nav-portfolio"> Portfolio </a>
        <a href="qualifications.html" id="nav-qualifications"> Qualifications </a>
        <a href="service.html" id="nav-service"> Service </a>
    </div>`,

    addNavbar: function() {
        if (this.navbar) {
            this.navbar.innerHTML = this.navbarHTML;
        }
    }
}

GlobalHTML.addNavbar();