// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`

// importing the ICalculator interface
import { ICalculator } from "./20-import-export";

// default exporting Calculator class
export default class Calculator implements ICalculator {
  result: number = 0;

  sum = (a: number, b: number): number => {
    this.result = a + b;
    return this.result;
  };

  sub = (a: number, b: number): number => {
    this.result = a - b;
    return this.result;
  };

  mul = (a: number, b: number): number => {
    this.result = a * b;
    return this.result;
  };

  div = (a: number, b: number): number => {
    this.result = a / b;
    return this.result;
  };
}
