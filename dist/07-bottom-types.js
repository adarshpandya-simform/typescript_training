"use strict";
// to run this file, type in this comman in 
// command prompt => `ts-node {filename}.ts`
// bottom types can hold no values
let x = 'abc';
if (typeof x === 'string') {
    console.log(x.split(''));
}
else if (typeof x === 'number') {
    console.log(x.toFixed(2));
}
else {
    // here x is of type never
    console.log(typeof x);
}
