class Star {
    /**
     * 
     * @param {string} label 
     * @param {number} value should be 3, 4, or 5
     */
    constructor(label, value) {
        this.label = label;
        this.value = value;
    }

    toHTML() {
        return `<div class="row">
            <div class="col-5 stars-label">${this.label}</div>
            <div class="col-7 stars ${this.value}-star" title="${this.value} out of 5 stars"></div>
        </div>`;
    }
}

const stars = [
    new Star('C++', 5), new Star('Python', 4), new Star('JavaScript', 4),
    new Star('NodeJS', 3), new Star('Ruby/Rails', 3), new Star('Java', 3),
    new Star('Git', 4), new Star('Agile', 4), new Star('OOP', 4),
    new Star('Full-Stack', 4), new Star('APIs', 3)
];

stars.sort((a, b) => {return b.value - a.value;}) //want reverse sort

module.exports = stars;