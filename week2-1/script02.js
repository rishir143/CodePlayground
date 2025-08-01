class Rectangle {
  constructor(length, width, color) {
    this.width = width;
    this.length = length;
    this.color = color;
  }
  area() {
    return this.width * this.length;
  }
  paint() {
    console.log(`Color of the Rectsngle is ${this.color}`);
  }
}

const rect = new Rectangle(4, 5, "blue");
const ans = rect.area();
const Show = rect.paint();
console.log(ans);
