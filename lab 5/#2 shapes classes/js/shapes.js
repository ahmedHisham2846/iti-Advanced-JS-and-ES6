// Shape abstract class
class Shape {
  static shapesCount = 0;

  constructor(type, dimension) {
    if (new.target === Shape) {
      throw new Error("Shape is an abstract class");
    }

    this.type = type;
    this.dimension = dimension;
  }

  calculateArea() {
    throw new Error("calcArea method not implemented");
  }

  calculatePerimeter() {
    throw new Error("calcAPerimeter method not implemented");
  }

  static getCount() {
    return Shape.shapesCount;
  }
}

// Circle class
export class Circle extends Shape {
  constructor(radius) {
    super("Circle", radius);
    Shape.shapesCount++;
  }

  calculateArea() {
    return 2 * Math.PI * this.dimension;
  }

  calculatePerimeter() {
    return Math.PI * this.dimension * 2;
  }
  toString() {
    return `area is: ${this.calculateArea()}, perimeter is: ${this.calculatePerimeter()}`;
  }
}

// Square class
export class Square extends Shape {
  constructor(edge) {
    super("Square", edge);
    Shape.shapesCount++;
  }

  calculateArea() {
    return Math.pow(this.dimension, 2);
  }

  calculatePerimeter() {
    return this.dimension * 2;
  }
  toString() {
    return `area is: ${this.calculateArea()}, perimeter is: ${this.calculatePerimeter()}`;
  }
}

// Rectangle class
export class Rectangle extends Shape {
  constructor(width, heigh) {
    super("Triangle", width);
    Shape.shapesCount++;
    this.heigh = heigh;
  }

  calculateArea() {
    return this.dimension * this.heigh;
  }

  calculatePerimeter() {
    return (this.dimension + this.heigh) * 2;
  }
  toString() {
    return `area is: ${this.calculateArea()}, perimeter is: ${this.calculatePerimeter()}`;
  }
}
