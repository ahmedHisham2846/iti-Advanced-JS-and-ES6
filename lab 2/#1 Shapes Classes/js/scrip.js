// Shape apstract class
function Shape(_type) {
  if (this.constructor == Shape) throw new Error("Shape is an apstract class");

  this.type = _type;
  this.calculateArea = function () {
    throw new Error("calcArea method not implemented");
  };

  this.calculatePerimeter = function () {
    throw new Error("calcAPerimeter method not implemented");
  };
}
Shape.shapesCount = 0;
Shape.getCount = function () {
  return Shape.shapesCount;
};

// Circle class
function Circle(radius) {
  Shape.call(this, "Circle");
  Shape.shapesCount++;
  this.radius = radius;
  this.calculatePerimeter = function () {
    return Math.PI * this.radius * 2;
  };
  this.calculateArea = function () {
    return 2 * Math.PI * this.radius;
  };
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.toStrong = function () {
  return `I'm a circle, my area is ${this.calculateArea()}`;
};

// Square class
function Square(edge) {
  Shape.call(this, "Square");
  Shape.shapesCount++;
  this.edge = edge;
  this.calculateArea = function () {
    return Math.pow(this.edge, 2);
  };
  this.calculatePerimeter = function () {
    return this.edge * 2;
  };
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.toString = function () {
  return `I'm a squere, my area is ${this.calculateArea()}`;
};

// Triangle class
function Triangle(heigh, base, edge2, edge3) {
  Shape.call(this, "Triangle");
  Shape.shapesCount++;
  this.heigh = heigh;
  this.base = base;
  this.edge2 = edge2;
  this.edge3 = edge3;
  this.calculateArea = function () {
    return 0.5 * this.base * this.heigh;
  };
  this.calculatePerimeter = function () {
    return this.base + this.edge2 + this.edge3;
  };
}
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;
Triangle.prototype.toString = function () {
  return `I'm a triangle, my area is ${this.calculateArea()}`;
};

// Instances
var circle = new Circle(3);
var triangle = new Triangle(10, 20, 30, 6);
var square = new Square(10);

console.log(triangle.toString());

console.log(Shape.getCount());

/*********************************/
// using ES
/*********************************/

