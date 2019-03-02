class star {
   constructor(width, height, colours = true) {
        this.width = width;
        this.height = height;
        this.x = random(-this.width, this.width);
        this.y = random(-this.height, this.height);
        this.z = random(this.width);
        this.transformedZ = this.z;
        this.randomColor = colours ? color(random(255),random(255),random(255)) : color(255);
   }

   update() {
    this.z = this.z - speed;
    if (this.z < 1) {
        this.x = random(-this.width, this.width);
        this.y = random(-this.height, this.height);
        this.z = random(this.width);
        this.transformedZ = this.z;
    }
   }

   show() {
    fill(this.randomColor);
    noStroke();

    var startX = map(this.x / this.z, 0, 1, 0, this.width);
    var startY = map(this.y / this.z, 0, 1, 0, this.height);
    var radius = map(this.z, 0, this.width, 16, 0);

    ellipse(startX, startY, radius, radius);
    var transformedX = map(this.x / this.transformedZ, 0, 1, 0, this.width);
    var transformedY = map(this.y / this.transformedZ, 0, 1, 0, this.height);

    this.transformedZ = this.z;
    stroke(255);
    line(transformedX, transformedY, startX, startY);
   }
}