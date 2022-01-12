"use strict";
// to run this file, type in this comman in 
// command prompt => `ts-node {filename}.ts`
// defending unknown types with type-guards
let myName_ = 'adarsh';
// type guarding
if (typeof myName_ === 'string') {
    console.log(myName_.split(''));
}
myName_ = new Promise((resolve, reject) => {
    resolve();
});
if (myName_ instanceof Promise) {
    myName_.then(() => console.log("resolved"));
}
let myUnknownType = { name: 'ap', email: 'ap@gmail.com' };
// custom type guard
function hasEmail(x) {
    return typeof x.name === 'string' && typeof x.email === 'string';
}
if (hasEmail(myUnknownType)) {
    console.log(myUnknownType.email);
}
// pluck out undefined with typeguard
function isDefined(arg) {
    return typeof arg !== 'undefined';
}
const arr = [1, 2, 3, undefined, 4];
console.log(arr.filter(isDefined));
