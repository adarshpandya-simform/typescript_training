// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`

const returnArray = <T>(elem1: T, elem2: T) => {
  return [elem1, elem2];
};

console.log(returnArray(5, 6));

// throws error
// console.log(returnArray('adarsh', 6))

console.log(returnArray("a", "b"));
