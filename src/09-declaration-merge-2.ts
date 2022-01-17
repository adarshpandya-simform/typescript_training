// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`

function format(amount: number): string {
  return `${format.currency}${amount.toFixed(2)}`;
}

namespace format {
  export const currency: string = "$ ";
}

// works
console.log(format(5));

// this also works
console.log(format.currency);
