

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
        setTimeout(typeWriter, 75, element, text, i+1);
    }
}
setTimeout(() => typeWriter(document.getElementById('name-span'), 'Lalit Bauskar'), 250);


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
        file = 'src/lottie/5stars.json';
    } else if (element.classList.contains('4-star')) {
        file = 'src/lottie/4stars.json';
    } else if (element.classList.contains('3-star')) {
        file = 'src/lottie/3stars.json';
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


//contact button animations
const linkedin = lottie.loadAnimation({
    container: document.getElementById('linkedin-button'),
    path: 'src/lottie/linkedin.json',
    renderer: 'svg',
    loop: true,
    autoplay: false
});
linkedin.setSpeed(0.7);

const github = lottie.loadAnimation({
    container: document.getElementById('github-button'),
    path: 'src/lottie/github.json',
    renderer: 'svg',
    loop: true,
    autoplay: false
});
github.setSpeed(3);

const email = lottie.loadAnimation({
    container: document.getElementById('email-button'),
    path: 'src/lottie/email.json',
    renderer: 'svg',
    loop: true,
    autoplay: false
});
email.setSpeed(1.5);


//contact buttons play on hover
function addContactButtonListeners(contactButton, animation) {

    contactButton.addEventListener('mouseover', () => {
        animation.play();
        contactButton.classList.remove('blue-filter');
        contactButton.classList.add('white-filter');
    });

    contactButton.addEventListener('mouseout', () => {
        animation.stop();
        contactButton.classList.remove('white-filter');
        contactButton.classList.add('blue-filter');
    });
}
addContactButtonListeners(document.getElementById('linkedin-button'), linkedin);
addContactButtonListeners(document.getElementById('github-button'), github);
addContactButtonListeners(document.getElementById('email-button'), email);


//elements of tiles slide in on hover
const tiles = Array.from(document.getElementsByClassName('gallery-item'));
for (const tile of tiles) {
    const above = Array.from(tile.getElementsByClassName('some-above'));
    const below = Array.from(tile.getElementsByClassName('some-below'));
    tile.addEventListener('mouseover', () => {
        for (const elem of above) {
            elem.classList.add('final-pos');
        }

        for (const elem of below) {
            elem.classList.add('final-pos');
        }
    });

    tile.addEventListener('mouseout', () => {
        for (const elem of above) {
            elem.classList.remove('final-pos');
        }

        for (const elem of below) {
            elem.classList.remove('final-pos');
        }
    });
}

//detail buttons show up when tabbed    
const detailButtons = Array.from(document.querySelectorAll('.gallery-item button'));
for (const button of detailButtons) {
    const textDiv = button.parentNode;
    button.addEventListener('focus', () => {
        textDiv.style.opacity = '1';
        for (const child of textDiv.children) {
            child.classList.add('final-pos');
        }
    });
    button.addEventListener('blur', () => {
        textDiv.style.opacity = '';
        for (const child of textDiv.children) {
            child.classList.remove('final-pos');
        }
    });
}

//jquery stuff
$(() => {

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

        const rightElems = $('#skill-stars .far-right').toArray();
        for (let i = 0; i < rightElems.length; ++i) {
            setTimeout(() => {rightElems[i].classList.add('final-pos')}, msDelay * i);
        }

        $('.stars svg').attr('viewBox', '40 30 160 40');
        $('.stars svg').attr('width', '90');
        $('.stars svg').attr('height', '40');
    });


    function animateOnAppearance(container, selector, msDelay) {
        $(container).appear();
        $(container).on('appear', () => {
            const elems = $(`${container} ${selector}`).toArray();
            for (let i = 0; i < elems.length; ++i) {
                setTimeout(() => {elems[i].classList.add('final-pos')}, msDelay * i);
            }
        })
    }
    animateOnAppearance('#about', '.far-left', 150); //slide from left in about section
    animateOnAppearance('#projects', '.far-below', 200); //slide from below in projects section
    animateOnAppearance('#experience', '.tiny', 150); //grow in experience section
});


