"use strict";
// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`
class Shape {
    constructor() {
        this.area = 0;
    }
    getArea() {
        console.log(this.area);
    }
}
class Circle extends Shape {
    constructor(r) {
        super();
        //   declaring own properties of class
        this.r = 0;
        this.r = r;
    }
    // calculate area of circle
    calculate() {
        this.area = Math.PI * this.r * this.r;
    }
}
// using circle class
let circle = new Circle(2);
circle.calculate();
circle.getArea();
