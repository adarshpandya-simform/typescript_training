"use strict";
// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`
// declaring MathLib
class MathLib {
    // static methods
    static format(amt) {
        return `$${amt}.00`;
    }
    static min(arr) {
        return Math.min(...arr);
    }
    static getPiValue() {
        // static methods can access static value
        return this.PI;
    }
}
// declaring static fields and methods
MathLib.PI = 3.14;
// we can use this methods and vars without instanciating class
console.log(MathLib.PI);
console.log(MathLib.getPiValue());
console.log(MathLib.min([5, 7, 3]));
console.log(MathLib.format(5));
