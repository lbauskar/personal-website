/**
 * Image that on mouseover, reveals a title, subtitle, and detail button
 */
class Tile {
    /**
     * 
     * @param {string} title 
     * @param {string} subtitle 
     * @param {string} image 
     * @param {string} imageAlt 
     * @param {string} transformClass
     */
    constructor(title, subtitle, image, imageAlt, transformClass) {
        this.title = title;
        this.subtitle = subtitle;
        this.image = image;
        this.imageAlt = imageAlt;
        this.transformClass = transformClass;
    }
}

/**
 * Modal containing an image, title, subtitle, bulletpoints, and buttons
 */
class Modal {
    /**
     * 
     * @param {string} title 
     * @param {string} subtitle 
     * @param {string[]} bulletpoints 
     * @param {{type: string, href: string}[]} buttons 
     * @param {{src: string, alt: string}[]} images
     */
    constructor(title, subtitle, bulletpoints, buttons, images) {
        this.title = title;
        this.subtitle = subtitle;
        this.bulletpoints = bulletpoints;
        this.buttons = buttons;
        this.images = images;
    }
}

/**
 * Combines the Tile and Modal objects under one id, so that clicking the tile activates the modal
 */
class TileAndModal {
    /**
     * 
     * @param {string} id 
     * @param {Tile} tile 
     * @param {Modal} modal 
     */
    constructor(id, tile, modal) {
        this.id = id;
        this.tile = tile;
        this.modal = modal;
    }

    /**
     * 
     * @returns HTML representation of `this.tile`
     */
    tileHTML() {
        return `<div class="gallery-item ${this.tile.transformClass}">
            <img src="${this.tile.image}" alt="${this.tile.imageAlt}" loading="lazy"/>
            <div class="text">
                <h4 class="some-above">${this.tile.title}</h4>
                <p class="some-above">${this.tile.subtitle}</p>
                <button class="btn btn-outline-dark some-below" onclick="$('#${this.id}-modal').modal('show');"> Details </button>
            </div>
        </div>`
    }

    /**
     * 
     * @returns HTML representation of `this.modal`
     */
    modalHTML() {
        /**
         * 
         * @param {{type: string, href: string}[]} buttons 
         * @returns 
         */
        function makeModalButtons(buttons) {
            const buttonHTML = buttons.map(button => {
                let classList = '';
                let icon = '';
                let text = '';
                let disabled = false;
    
                switch (button.type) {
                    case 'repo':
                        classList = 'btn-outline-success';
                        icon = 'fa-github';
                        text = 'Repository'
                        break;
    
                    case 'link':
                        classList = 'btn-outline-primary';
                        icon = 'fa-link';
                        text = 'Visit';
                        break;
    
                    case 'download':
                        classList = 'btn-outline-primary';
                        icon = 'fa-download';
                        text = 'Download';
                        break;
    
                    case 'private-repo':
                        classList = 'btn-outline-danger';
                        icon = 'fa-lock';
                        text = 'Private Repository';
                        disabled = true;
                        break;
    
                    default:
                        break;
                }
    
                const disabledText = disabled ? 'disabled style="pointer-events: none;"' : '';
                
                return `<a class="btn ${classList}" ${disabledText} href=${button.href} target="_blank" rel="noreferrer">
                    <i class="fa ${icon}"></i>
                    ${text}
                </a>`;
            }).join('\n');
    
            return `<div class="row">
                <div class="col">${buttonHTML}</div>
                <div class="col close-col">
                    <button class="close-modal btn" data-dismiss="modal" aria-label="close">
                        <i class="fa fa-times-circle"></i>
                    </button>
                </div>
            </div>`
        }

        /**
         * 
         * @param {{src: string, alt: string}[]} images 
         * @param {string} id
         */
        function makeCarousel(images, id) {
            const carouselItems = images.map((image, index) => {
                const active = (index === 0) ? 'active' : ''
                return `<div class="carousel-item ${active}">
                    <img class="d-block w-100" src="${image.src}" alt="${image.alt}" loading="lazy"/>
                </div>`
            }).join('\n');

            let controls = '';
            if (images.length > 1) {
                controls = `<a class="carousel-control-prev" href="#${id}-carousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#${id}-carousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>`;
            }

            return `<div id="${id}-carousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    ${carouselItems}
                </div>
                ${controls}
            </div>`;
        }

        const bullets = this.modal.bulletpoints.map(bulletpoint => {return `<li>${bulletpoint}</li>`}).join('\n');

        return `<div class="modal modal-fade" id="${this.id}-modal" tabindex="-1" role="dialog" aria-label="${this.tile.title} Modal" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    ${makeCarousel(this.modal.images, this.id)}
                    <div class="text">
                        <h2>${this.modal.title}</h2>
                        <h3>${this.modal.subtitle}</h3>
                        <hr/>
                        <ul>${bullets}</ul>
                        ${makeModalButtons(this.modal.buttons)}
                    </div>
                </div>
            </div>
        </div>`
    }
}

const groupme = new TileAndModal(
    'groupme',
    new Tile('GroupMe Bot', 'Python', 'img/projects/groupme/1.jpg', 'Phones using GroupMe', 'far-below'),
    new Modal(
        'GroupMe Chat Bot',
        'helps facilitate communication in large group chats',
        [
            'Uses Python 3 and Flask; deployed on Heroku',
            'Automated greetings for new users and macros for regular ones',
            '"@everyone" to notify all members of a group chat'
        ], 
        [{type: 'repo', href: 'https://github.com/lbauskar/groupme-bot'}], 
        [
            {src: 'img/projects/groupme/1.jpg', alt: 'Phones using GroupMe'}
        ]
    )
);

const kanban = new TileAndModal(
    'kanban',
    new Tile('Kanban for VS Code', 'JavaScript, TypeScript', 'img/projects/kanban/1.jpg', 'Woman using kanban board', 'far-below'),
    new Modal(
        'Kanban Board for Visual Studio Code',
        'Extension used to visually organize tasks',
        [
            'Written in HTML, CSS, TypeScript, and JavaScript',
            'Automatically creates a new board for each project',
            '<em>"In the whole of VS Code extensions, yours was the simplest to use and most flexible"</em> - GitHub comment'
        ],
        [
            {type: 'repo', href: 'https://github.com/lbauskar/kanban'},
            {type: 'download', href: 'https://marketplace.visualstudio.com/items?itemName=lbauskar.kanban'}
        ],
        [
            {src: 'img/projects/kanban/1.jpg', alt: 'Woman using kanban board'}
        ]
    )
);

const pathfinding = new TileAndModal(
    'pathfinding',
    new Tile('Pathfinding Visualizer', 'Java', 'img/projects/pathfinding/1.jpg', 'Dashed line on map', 'far-below'),
    new Modal(
        'Interactive Pathfinding Visualizer',
        'GUI program that shows how pathfinding algorithms work',
        [
            'Java application using Swing for GUI elements',
            'Gradle project with 100% test coverage and documentation',
            'Draw obstacles to navigate around or auto-generate a maze'
        ], 
        [{type: 'repo', href: 'https://github.com/lbauskar/java-pathfinding-visualizer'}],
        [
            {src: 'img/projects/pathfinding/1.jpg', alt: 'Dashed line on map'}
        ]
    )
);

const rotaract = new TileAndModal(
    'rotaract',
    new Tile('Rotaract Event Tracker', 'Ruby on Rails, PostgreSQL', 'img/projects/rotaract/1.jpg', 'Aggie Rotaract volunteers handing out goods', 'far-below'),
    new Modal(
        'Aggie Rotaract Event Tracker',
        'Web app for members to schedule and attend charitable events',
        [
            'Ruby on Rails website using PostgreSQL for the backend',
            'Integrated with school emails, no additional signup necessary',
            'CI/CD implemented with GitHub actions and Heroku pipeline'
        ], 
        [
            {type: 'private-repo', href: '#'},
            {type: 'link', href:'http://aggie-rotaract.herokuapp.com/'}    
        ],
        [
            {src: 'img/projects/rotaract/1.jpg', alt: 'Aggie Rotaract volunteers handing out goods'}
        ]
    )

);

const soar = new TileAndModal(
    'soar',
    new Tile('Project SOAR', 'C++', 'img/projects/soar/1.jpg', 'Flying quadcopter', 'far-below'),
    new Modal(
        'Project SOAR',
        'Quadcopter controlled by tilting motors',
        [
            'Substantially edited <a href="https://github.com/PX4/PX4-Autopilot" target="_blank" rel="noreferrer">Pixhawk firmware</a> to support motor tilting',
            'Personally added code to support multiple control options, making the drone easier to pilot',
            'Worked as a team with ~10 other programmers; coordinated with piloting and electronics teams'
        ], 
        [{type: 'private-repo', href: '#'}], 
        [
            {src: 'img/projects/soar/1.jpg', alt: 'Flying quadcopter'}
        ]
    )
);

const website = new TileAndModal(
    'website',
    new Tile('Personal Website', 'NodeJS, JQuery', 'img/projects/website/1.jpg', 'My website', 'far-below'),
    new Modal(
        'Personal Website',
        "You're looking at it",
        [
            'NodeJS on the server side',
            'HTML, CSS, Bootstrap, and JQuery for frontend',
            'Lottie and ThreeJS for complex animations'
        ], 
        [{type: 'repo', href:'https://github.com/lbauskar/personal-website'}],
        [
            {src: 'img/projects/website/1.jpg', alt: 'My website'}
        ]
    )
);

const hub = new TileAndModal(
    'hub',
    new Tile('The Hub', 'NodeJS, JavaScript', 'img/projects/hub/1.jpg', 'Landing page of The Hub', 'far-below'),
    new Modal(
        'The Hub', 
        'Aggregates posts from Facebook, Instagram, and Reddit',
        [
            'NodeJS, HTML, CSS, and JavaScript',
            'Worked as a team with 4 other students',
            'Responsible for account creation and social media API integration'
        ],
        [
            {type: 'private-repo', href: '#'},
            {type: 'link', href: 'https://csce315-hub.herokuapp.com/'}
        ], 
        [
            {src: 'img/projects/hub/1.jpg', alt: 'Landing page of The Hub'}
        ]
    )
);

const projects = [groupme, kanban, pathfinding, rotaract, soar, website, hub];

const ra = new TileAndModal(
    'ra',
    new Tile('Resident Advisor', 'Employment', 'img/experience/ra/1.jpg', 'Promotional Resident Advisor picture featuring myself', 'tiny'),
    new Modal(
        'Resident Advisor',
        'Texas A&M Dept. of Residence Life | 2020 - Present',
        [
            'Keep residents informed of policies and work on-call shifts to handle emergencies',
            'Open and close the dorms, then inspect them throughout the year',
            'Work with 11 other Resident Advisors to ensure a safe and welcoming community',
        ],
        [],
        [
            {src: 'img/experience/ra/1.jpg', alt: 'Promotional Resident Advisor picture featuring myself'}
        ]
    )
);

const sa = new TileAndModal(
    'sa',
    new Tile('Sophomore Advisor', 'Employment', 'img/experience/sa/1.jpg', 'Sophomore Advisor team after training', 'tiny'),
    new Modal(
        'Sophomore Advisor',
        'Texas A&M University Honors | 2019 - 2020',
        [
            'Led weekly seminar meetings to help freshmen adjust to college life and promote personal growth',
            'Planned and ran events for the Honors Housing Community'
        ],
        [],
        [
            {src: 'img/experience/sa/1.jpg', alt: 'Sophomore Advisor team after training'},
            {src: 'img/experience/sa/2.jpg', alt: 'SAs and Honors freshmen at the Brazos Valley Food Bank'},
            {src: 'img/experience/sa/3.jpg', alt: 'Group picture of SAs in costumes'}
        ]
    )
);

const icpc = new TileAndModal(
    'icpc',
    new Tile('Competitive Programming', 'Extracurricular Organization', 'img/experience/icpc/1.jpg', 'Code on a laptop', 'tiny'),
    new Modal(
        'Competitive Programmer',
        'Texas A&M Competitive Programming Team | 2019 - 2021',
        [
            'One of ten competitors selected from pool of ~100 through local competition, twice',
            'Participated in the International Competitive Programming Competition',
            'Primarily used C++ and Python 3'
        ],
        [],
        [
            {src: 'img/experience/icpc/1.jpg', alt: 'Code on a laptop'}
        ]
    )
);

const bonfire = new TileAndModal(
    'bonfire',
    new Tile('Student Bonfire', 'Community Service', 'img/experience/bonfire/1.jpg', 'Me carrying a log out of the woods', 'tiny'),
    new Modal(
        'Volunteer',
        'Student Bonfire | 100+ Hours | 2018 - 2020',
        [
            '501(c)(3) non-profit organization',
            'Cleared land for local farmers to promote agricultural development in the Brazos Valley',
            "Took part in a tradition that's over a century old"
        ],
        [],
        [
            {src: 'img/experience/bonfire/1.jpg', alt: 'Me carrying a log out of the woods'},
            {src: 'img/experience/bonfire/2.jpg', alt: 'Me swinging an axe'},
            {src: 'img/experience/bonfire/3.jpg', alt: 'Me at a night shift'}
        ]
    )
);

const experiences = [ra, sa, icpc, bonfire];
module.exports = {
    projects: projects,
    experiences: experiences
};