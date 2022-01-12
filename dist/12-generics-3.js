"use strict";
// to run this file, type in this comman in 
// command prompt => `ts-node {filename}.ts`
const returnArray = (elem1, elem2) => {
    return [elem1, elem2];
};
console.log(returnArray(5, 6));
// throws error
// console.log(returnArray('adarsh', 6))
console.log(returnArray('a', 'b'));
