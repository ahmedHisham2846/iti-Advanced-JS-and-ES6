function Rectangle(_width, _height) {
  this.width = _width;
  this.height = _height;
}

Rectangle.prototype.getArea = function () {
  return this.height * this.width;
};

Rectangle.prototype.getCircumference = function () {
  return (this.height + this.width) * 2;
};

Rectangle.prototype.toString = function () {
  return `This is a rectangle, its area is ${this.getArea()} and its circumference is ${this.getCircumference()}`;
};

var rec1 = new Rectangle(10, 20);
console.log(rec1.toString());
