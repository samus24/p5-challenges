class Box {
    constructor(x, y, z, size) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.position = createVector(this.x, this.y, this.z);
    }

    mengerize() {
        const boxes = [];
        for(let a = -1; a < 2; ++a) {
            for(let o = -1; o < 2; ++o) {
                for(let ap = -1; ap < 2; ++ap) {
                    const isNotInCenter = (Math.abs(a) +  Math.abs(o) +  Math.abs(ap)) > 1;
                    const newSize = this.size / 3;
                    if (isNotInCenter) {
                        const newX = this.position.x + a * newSize;
                        const newY = this.position.y + o * newSize;
                        const newZ = this.position.z + ap * newSize;
                        const newBox = new Box(newX, newY, newZ, newSize);
                        boxes.push(newBox);
                    }
                }
            }
        }

        return boxes;
    }

    show() {
        push();
        translate(this.position.x, this.position.y, this.position.z);
        box(this.size);
        pop();
    }
}