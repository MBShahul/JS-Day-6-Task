class Circle {
  constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
  }

  getRadius() {
      return this.radius; 
  }

  getColor() {
      return this.color;
  }

  setRadius(radius) {
      this.radius = radius;
  }

  setColor(color) {
      this.color = color;
  }

  toString() {
      return `Circle[radius=${this.radius}, color=${this.color}]`;
  }

  getArea() {
      return Math.PI * Math.pow(this.radius, 2);
  }

  getCircumference() {
      return 2 * Math.PI * this.radius;
  }
}

const myCircle = new Circle(2.5, "blue");
console.log(myCircle.toString());
console.log("Area:", myCircle.getArea());
console.log("Circumference:", myCircle.getCircumference());