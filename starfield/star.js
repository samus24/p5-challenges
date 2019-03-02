class star {
   constructor(width, height) {
        this.width = width;
        this.height = height;
        this.x = random(-this.width, this.width);
        this.y = random(-this.height, this.height);
        this.z = random(this.width);
        this.pz = this.z;
   }

   update() {
    this.z = this.z - speed;
    if (this.z < 1) {
        this.x = random(-this.width, this.width);
        this.y = random(-this.height, this.height);
        this.z = random(this.width);
        this.pz = this.z;
    }
   }

   show() {
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, this.width);
    var sy = map(this.y / this.z, 0, 1, 0, this.height);
    var r = map(this.z, 0, this.width, 16, 0);

    ellipse(sx, sy, r, r);
    var px = map(this.x / this.pz, 0, 1, 0, this.width);
    var py = map(this.y / this.pz, 0, 1, 0, this.height);

    this.pz = this.z;
    stroke(255);
    line(px, py, sx, sy);
   }
}