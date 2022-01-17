"use strict";
// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`
let { value } = { value: [] };
value.push("a");
value.push("b");
value.push("c");
console.log(value);
let data = { value: 0 };
data.value = "";
data.value = "Adarsh";
data.value = 1234;
// throws erorr
// data.value = false
// throws error
// data.value = null
// throws error
// data.value = {name:'adarsh'}
console.log(data);
