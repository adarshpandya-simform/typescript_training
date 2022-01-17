"use strict";
// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`
// assigning number data type to num var
let num = 1;
console.log(num);
// throws error
// num = 'abcd'
// assigning string data type to name var
let myName = "Adarsh";
console.log(myName);
// all of this will throw error
// myName = 1
// myName = []
// myName = {name:'adarsh'}
// assigning multiple types with |
// notice here both string | number are allowed
let userId = 123;
// still works
userId = "TE5-T197";
console.log(userId);
//will throw error
// userId = null
// userId = []
// allowing a var to be null | numner
let studentId = null;
studentId = 123;
console.log(studentId);
// throws error
// studentId={id:'123'}
// studentId='123'
// any type
let phoneNo = 123;
// all will work
phoneNo = [];
phoneNo = { no: "123" };
phoneNo = null;
phoneNo = "6798";
console.log(phoneNo);
// creating a user object
let user = {
    name: "Adarsh",
    contact: 123,
    age: 21,
};
console.log(user);
// this will throw error
// user = { name:{first:'adarsh'},contact:'123',age:null}
// creating object of similart strict datatype
let marks = [100, 200, 300, 400];
console.log(marks);
// this will throw error
// marks = ['asd','xyz']
// creating an array of both number and string
let days = [1, "monday", 2, "tuesday"];
console.log(days);
// this will throw error
// days = [{num:1,day:'monday'}]
// another way to create array
let names = ["adarsh", "mitul", "bhumika"];
console.log(names);
// this will throw error
// names.push(0)
