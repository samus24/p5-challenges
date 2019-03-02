var stars = [];
var speed;

function setup() {
    createCanvas(600, 600);
    for (let i = 0; i < 800; ++i) {
        stars[i] = new star(width, height);
    }
}

function draw() {
    speed = map(mouseY, 0, width, 0, 50);
    background(0);
    translate(width / 2, height / 2);
    for (let i = 0; i < stars.length; ++i) {
        stars[i].update();
        stars[i].show();
    }
}