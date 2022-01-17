// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`

abstract class AbstractShape {
  protected area: number = 0;
  public abstract calculate(): number;
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
  b: number = 0;
  h: number = 0;

  constructor(b: number, h: number) {
    super();
    this.b = b;
    this.h = h;
  }

  public calculate(): number {
    this.area = 0.5 * this.b * this.h;
    return this.area;
  }

  public display(): void {
    console.log(this.area);
  }
}

// this will throw error because
// we cannot instanciate abtract classes
// let a = new AbstractShape()

let triangle = new Triangle(5, 10);
triangle.calculate();
triangle.display();
