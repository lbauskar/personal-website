

//load graph in background
VANTA.NET({
    el: '#home',
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

typeWriter(document.getElementById('name-span'), 'Lalit Bauskar');


//scroll to element
function scrollToID(id) {
    let elem = document.getElementById(id);
    elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
    });
}



lottie.setQuality('low');
//load star fill-in animation
const stars = [];
for (let element of document.getElementsByClassName('stars')) {

    let file;
    if (element.classList.contains('5-star')) {
        file = 'src/5stars.json';
    } else if (element.classList.contains('4-star')) {
        file = 'src/4stars.json';
    } else if (element.classList.contains('3-star')) {
        file = 'src/3stars.json';
    }

    const animation = lottie.loadAnimation({
        container: element,
        path: file,
        renderer: 'svg',
        loop: false,
        autoplay: false,
    });
    animation.setSpeed(2);
    stars.push(animation);
}

//jquery stuff
$(function() {

    //make navbar highlight whatever section you're on
    window.addEventListener('scroll', () => {
        $('.nav-item').removeClass('active');
        if ($('#contact').is(':appeared')) {
            $('#contact-nav-item').addClass('active');
        } else if ($('#experience').is(':appeared')) {
            $('#experience-nav-item').addClass('active');
        } else if ($('#projects').is(':appeared')) {
            $('#projects-nav-item').addClass('active');
        } else if ($('#about').is(':appeared')) {
            $('#about-nav-item').addClass('active');
        } else if ($('#home').is(':appeared')) {
            $('#home-nav-item').addClass('active');
        }
    });

    //have stars sequentially fill in when about section is in view
    $('#skill-stars').appear();
    $('#skill-stars').on('appear', () => {
        const msDelay = 100;

        for (let i = 0; i < stars.length; ++i) {
            setTimeout(() => {stars[i].play()}, msDelay * (i + 1));
        }

        $('.stars svg').attr('viewBox', '40 30 160 40');
        $('.stars svg').attr('width', '90');
        $('.stars svg').attr('height', '40');
    });

    //have stuff on about section slide in from left of screen
    $('#about').appear();
    $('#about').on('appear', () => {
        const msDelay = 150;
        const elems = $('.far-left').toArray()
        for (let i = 0; i < elems.length; ++i) {
            setTimeout( () => {elems[i].classList.add('final-pos')}, msDelay * (i));
        }
    });

    
});


