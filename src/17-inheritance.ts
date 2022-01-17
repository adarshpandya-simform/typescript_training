// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`

class Shape {
  protected area: number = 0;

  public getArea() {
    console.log(this.area);
  }
}

class Circle extends Shape {
  //   declaring own properties of class
  r: number = 0;
  constructor(r: number) {
    super();
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
