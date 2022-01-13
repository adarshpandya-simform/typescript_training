"use strict";
// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`
class AbstractShape {
    constructor() {
        this.area = 0;
    }
}
// this will throw error because if
// we extend AbstractShape then
// we have to give implementation of calculate
// class Triangle extends AbstractShape {
//   public display() {
//     console.log("object");
//   }
// }
class Triangle extends AbstractShape {
    constructor(b, h) {
        super();
        this.b = 0;
        this.h = 0;
        this.b = b;
        this.h = h;
    }
    calculate() {
        this.area = 0.5 * this.b * this.h;
        return this.area;
    }
    display() {
        console.log(this.area);
    }
}
// this will throw error because
// we cannot instanciate abtract classes
// let a = new AbstractShape()
let triangle = new Triangle(5, 10);
triangle.calculate();
triangle.display();
