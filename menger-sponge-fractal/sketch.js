let transformModifier = 0;
let sponges = [];

function setup() {
  createCanvas(600, 600, WEBGL);
  sponges.push(new Box(0, 0, 0, 300));
}

function mousePressed() {
  let next = [];
  sponges.forEach((sponge) => {
    const b = sponge;
    const newBoxes = b.mengerize();
    next = next.concat(newBoxes);
  })
  sponges = next;
}

function draw() {
  background(51);
  rotateX(transformModifier);
  rotateY(transformModifier * 0.4);
  rotateZ(transformModifier * 0.1);

  sponges.forEach((sponge) => {
      sponge.show();
  })
  transformModifier += 0.01;
}