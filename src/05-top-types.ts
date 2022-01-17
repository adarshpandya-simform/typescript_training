// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`

// top types are the types which can hold any
// value. [any,unknown]

let age: any = 35;

// no error
age = "35";

// no error
age = [1, 2, "3"];

console.log(age);

// no error
console.log(age.myAge);

let Name: unknown = "adarsh";

console.log(Name);

// throws error
// Name.lastName
