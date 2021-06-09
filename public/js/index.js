

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

const linkedin = lottie.loadAnimation({
    container: $('#linkedin-button')[0],
    path: 'src/linkedin.json',
    renderer: 'svg',
    loop: true,
    autoplay: false
});
linkedin.setSpeed(0.7);

const github = lottie.loadAnimation({
    container: $('#github-button')[0],
    path: 'src/github.json',
    renderer: 'svg',
    loop: true,
    autoplay: false
});
github.setSpeed(3);


const email = lottie.loadAnimation({
    container: $('#email-button')[0],
    path: 'src/email.json',
    renderer: 'svg',
    loop: true,
    autoplay: false
});
email.setSpeed(1.5);


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

        $('.stars svg').attr('viewBox', '40 30 160 40');
        $('.stars svg').attr('width', '90');
        $('.stars svg').attr('height', '40');
    });

    //have stuff on about section slide in from left of screen
    $('#about').appear();
    $('#about').on('appear', () => {
        const msDelay = 150;
        const leftElems = $('#about .far-left').toArray();
        for (let i = 0; i < leftElems.length; ++i) {
            setTimeout(() => {leftElems[i].classList.add('final-pos')}, msDelay * i);
        }

        const rightElems = $('#about .far-right').toArray();
        for (let i = 0; i < rightElems.length; ++i) {
            setTimeout(() => {rightElems[i].classList.add('final-pos')}, msDelay * i);
        }
    });

    //have project tiles slide from below
    $('#projects .gallery').appear();
    $('#projects .gallery').on('appear', () => {
        const msDelay = 200;
        const elems = $('#projects .far-below').toArray();
        for (let i = 0; i < elems.length; ++i) {
            setTimeout(() => {elems[i].classList.add('final-pos')}, msDelay * i);
        }
    });

    //have experience tiles gro
    $('#experience .gallery').appear();
    $('#experience .gallery').on('appear', () => {
        const msDelay = 150;
        const elems = $('#experience .tiny').toArray();
        for (let i = 0; i < elems.length; ++i) {
            setTimeout(() => {elems[i].classList.add('final-pos')}, msDelay * i);
        }
    })

    //contact buttons play on hover
    const linkedinButton = $('#linkedin-button')[0];
    linkedinButton.addEventListener('mouseover', () => {
        linkedin.play();
        linkedinButton.classList.remove('blue-filter');
        linkedinButton.classList.add('white-filter');
    });
    linkedinButton.addEventListener('mouseout', () => {
        linkedin.stop();
        linkedinButton.classList.remove('white-filter');
        linkedinButton.classList.add('blue-filter');
    });

    const githubButton = $('#github-button')[0];
    githubButton.addEventListener('mouseover', () => {
        github.play();
        githubButton.classList.remove('blue-filter');
        githubButton.classList.add('white-filter');
    });
    githubButton.addEventListener('mouseout', () => {
        github.stop();
        githubButton.classList.remove('white-filter');
        githubButton.classList.add('blue-filter');
    });

    const emailButton = $('#email-button')[0];
    emailButton.addEventListener('mouseover', () => {
        email.play();
        emailButton.classList.remove('blue-filter');
        emailButton.classList.add('white-filter');
    });
    emailButton.addEventListener('mouseout', () => {
        email.stop();
        emailButton.classList.remove('white-filter');
        emailButton.classList.add('blue-filter');
    });

    //elements of tiles slide in on hover
    const tiles = $('.gallery-item').toArray();
    for (const tile of tiles) {
        const above = tile.getElementsByClassName('some-above');
        const below = tile.getElementsByClassName('some-below');
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
    const detailButtons = $('.gallery-item button').toArray();
    for (const detailButton of detailButtons) {
        const textDiv = detailButton.parentNode;
        detailButton.addEventListener('focus', () => {
            textDiv.style.opacity = '1';
            for (const child of textDiv.children) {
                child.classList.add('final-pos');
            }
        });
        detailButton.addEventListener('blur', () => {
            textDiv.style.opacity = '';
            for (const child of textDiv.children) {
                child.classList.remove('final-pos');
            }
        });
    }
});


