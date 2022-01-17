// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`

// exporting interface
export interface ICalculator {
  result: number;
  sum: (a: number, b: number) => number;
  sub: (a: number, b: number) => number;
  mul: (a: number, b: number) => number;
  div: (a: number, b: number) => number;
}
