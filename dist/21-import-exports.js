"use strict";
// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`
Object.defineProperty(exports, "__esModule", { value: true });
// default exporting Calculator class
class Calculator {
    constructor() {
        this.result = 0;
        this.sum = (a, b) => {
            this.result = a + b;
            return this.result;
        };
        this.sub = (a, b) => {
            this.result = a - b;
            return this.result;
        };
        this.mul = (a, b) => {
            this.result = a * b;
            return this.result;
        };
        this.div = (a, b) => {
            this.result = a / b;
            return this.result;
        };
    }
}
exports.default = Calculator;
