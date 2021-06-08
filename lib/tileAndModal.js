class TileAndModal {
    constructor(id, tileTitle, tileSubtitle, tileImage, tileImageAlt,
        modalTitle, modalSubtitle, modalBulletpoints, modalButtons, modalImage, modalImageAlt) {
        this.id = id;
        this.tileTitle = tileTitle;
        this.tileSubtitle = tileSubtitle;
        this.tileImage = tileImage;
        this.tileImageAlt = tileImageAlt;
        this.modalTitle = modalTitle;
        this.modalSubtitle = modalSubtitle;
        this.modalBulletpoints = modalBulletpoints;
        this.modalButtons = modalButtons;
        this.modalImage = modalImage;
        this.modalImageAlt = modalImageAlt;
    }

    makeModalButtons() {
        const buttons = this.modalButtons.map(button => {
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
            <div class="col">${buttons}</div>
            <div class="col text-right">
                <a class="close-modal btn" data-dismiss="modal" aria-label="close">
                    <i class="fa fa-times-circle"></i>
                </a>
            </div>
        </div>`
    }

    tileHTML() {
        return `<div class="gallery-item">
            <img src="${this.tileImage}" alt="${this.tileImageAlt}" loading="lazy"/>
            <div class="text">
                <h4>${this.tileTitle}</h4>
                <p>${this.tileSubtitle}</p>
                <a class="btn btn-outline-dark" onclick="$('#${this.id}-modal').modal('show');"> Details </a>
            </div>
        </div>`
    }

    modalHTML() {
        const bullets = this.modalBulletpoints.map(bulletpoint => {return `<li>${bulletpoint}</li>`}).join('\n');

        return `<div class="modal modal-fade" id="${this.id}-modal" tabindex="-1" role="dialog" aria-label="${this.tileTitle} Modal" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered project-modal" role="document">
                <div class="modal-content">
                    <img src="${this.modalImage}" alt="${this.modalImageAlt}" loading="lazy"/>
                    <div class="text">
                        <h2>${this.modalTitle}</h2>
                        <h3>${this.modalSubtitle}</h3>
                        <ul>${bullets}</ul>
                        ${this.makeModalButtons()}
                    </div>
                </div>
            </div>
        </div>`
    }
}


const groupme = new TileAndModal(
    'groupme', 'GroupMe Bot', 'Python', 'img/projects/groupme.jpg',
    'Phones using GroupMe', 'GroupMe Bot', 'Chat bot that helps facilitate communication in large group chats',
    [
        'Uses Python 3 and Flask; deployed on Heroku',
        'Automated greetings for new users and macros for regular ones',
        '"@everyone" to notify all members of a group chat'
    ], [{type: 'repo', href: 'https://github.com/lbauskar/groupme-bot'}], 
    'img/projects/groupme.jpg', 'Phones using GroupMe'
);

const kanban = new TileAndModal(
    'kanban', 'Kanban for VS Code', 'JavaScript, TypeScript', 'img/projects/kanban.jpg', 'Woman using kanban board',
    'Kanban Board for Visual Studio Code', 'Extension used to visually organize tasks',
    [
        'Written in HTML, CSS, TypeScript, and JavaScript',
        'Automatically creates a new board for each project',
        '<em>"In the whole of VS Code extensions, yours was the simplest to use and most flexible" - GitHub comment</em>'
    ],
    [
        {type: 'repo', href: 'https://github.com/lbauskar/kanban'},
        {type: 'download', href: 'https://marketplace.visualstudio.com/items?itemName=lbauskar.kanban'}
    ], 'img/projects/kanban.jpg', 'Woman using kanban board'
);

const pathfinding = new TileAndModal(
    'pathfinding', 'Pathfinding Visualizer', 'Java', 'img/projects/pathfinding.jpg', 'Dashed line on map',
    'Interactive Pathfinding Visualizer', 'GUI program that shows how pathfinding algorithms work',
    [
        'Java application using Swing for GUI elements',
        'Gradle project with 100% test coverage and documentation',
        'Draw obstacles to navigate around or auto-generate a maze'
    ], [{type: 'repo', href: 'https://github.com/lbauskar/java-pathfinding-visualizer'}],
    'img/projects/pathfinding.jpg', 'Dashed line on map'
);

const rotaract = new TileAndModal(
    'rotaract', 'Rotaract Event Tracker', 'Ruby on Rails, PostgreSQL', 'img/projects/rotaract.jpg',
    'Volunteers handing out goods', 'Aggie Rotaract Event Tracker', 'Web app for members to schedule and attend charitable events',
    [
        'Ruby on Rails website using PostgreSQL for the backend',
        'Integrated with school emails, no additional signup necessary',
        'CI/CD implemented with GitHub actions and Heroku pipeline'
    ], 
    [
        {type: 'private-repo', href: '#'},
        {type: 'link', href:'http://aggie-rotaract.herokuapp.com/'}    
    ],
    'img/projects/rotaract.jpg', 'Volunteers handing out goods'
);

const soar = new TileAndModal(
    'soar', 'Project SOAR', 'C++', 'img/projects/soar.jpg', 'Flying quadcopter', 'Project SOAR',
    'Quadcopter controlled by tilting motors',
    [
        'Substantially edited <a href="https://github.com/PX4/PX4-Autopilot" target="_blank" rel="noreferrer">Pixhawk firmware</a> to support motor tilting',
        'Personally added code to support multiple control options, making the drone easier to pilot',
        'Worked as a team with ~10 other programmers; coordinated with piloting and electronics teams'
    ], [{type: 'private-repo', href: '#'}], 'img/projects/soar.jpg', 'Flying quadcopter'
);

const website = new TileAndModal(
    'website', 'Personal Website', 'NodeJS, JQuery', 'img/projects/website.jpg', 'My website',
    'Personal Website', "You're looking at it",
    [
        'NodeJS on the server side',
        'HTML, CSS, Bootstrap, and JQuery for frontend',
        'Lottie and ThreeJS for complex animations'
    ], [{type: 'repo', href:'https://github.com/lbauskar/personal-website'}], 'img/projects/website.jpg', 'My website'
);

const hub = new TileAndModal(
    'hub', 'The Hub', 'NodeJS, JavaScript', 'img/projects/hub.jpg', 'Landing page of The Hub',
    'The Hub', 'Aggregates posts from Facebook, Instagram, and Reddit',
    [
        'NodeJS, HTML, CSS, and JavaScript',
        'Worked as a team with 4 other students',
        'Responsible for account creation and social media API integration'
    ],
    [
        {type: 'private-repo', href: '#'},
        {type: 'link', href: 'https://csce315-hub.herokuapp.com/'}
    ], 'img/projects/hub.jpg', 'Landing page of The Hub'
);

const projects = [groupme, kanban, pathfinding, rotaract, soar, website, hub];
module.exports = projects;