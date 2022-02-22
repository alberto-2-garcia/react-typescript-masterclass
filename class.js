console.log('------------------------')

class Shape {
  #privateVariable = 'private';
  publicVariable = 'public';
  static staticVariable = 'static';

  constructor(h, w) {
    this.height = h;
    this.width = w;
    // this.#name = 'name';
  }

  getArea() {
    return 'not implemented';
  }

  getPrivateVariable() {
    return this.#privateVariable;
  }

//   getName() {
//     return this.#name;
//   }
}

class Square extends Shape {
  getArea() {
    return this.height * this.width;
  }

  getParentClassArea() {
    return super.getArea();
  }
}

const myShape = new Shape(5, 10);

console.log(myShape.width);
// console.log(myShape.#privateVariable); // error
console.log(myShape.publicVariable);
console.log(myShape.getPrivateVariable());
// console.log(myShape.getName());
console.log(myShape.getArea());
console.log(Shape.staticVariable);

const mySquare = new Square(5, 10);

console.log('');
console.log(mySquare.getArea());
console.log(mySquare.getParentClassArea());
console.log(mySquare.getPrivateVariable());
