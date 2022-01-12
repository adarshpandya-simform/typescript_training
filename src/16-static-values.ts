// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`

// declaring MathLib
class MathLib {
  // declaring static fields and methods
  static PI: number = 3.14;

  // static methods
  static format(amt: number) {
    return `$${amt}.00`;
  }

  static min(arr: number[]) {
    return Math.min(...arr);
  }

  static getPiValue() {
    // static methods can access static value
    return this.PI;
  }
}

// we can use this methods and vars without instanciating class

console.log(MathLib.PI);

console.log(MathLib.getPiValue());

console.log(MathLib.min([5, 7, 3]));

console.log(MathLib.format(5));
