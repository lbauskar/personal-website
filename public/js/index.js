//load graph in background
VANTA.NET({
    el: "#home",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    scale: 1,
    scaleMobile: 1,
    color: 0x4682b4,
    backgroundColor: 0x202228
});

//typewriter effect
function typeWriter(element, text, i = 0) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(typeWriter, 150, element, text, i+1);
    }
}

typeWriter(document.getElementById("name-span"), "Lalit Bauskar");


//scroll to element
function scrollToID(id) {
    let elem = document.getElementById(id);
    elem.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
}
