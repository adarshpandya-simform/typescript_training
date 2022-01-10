"use strict";
// to run this file, type in this comman in 
// command prompt => `nodemon {filename}.ts`
let users = [];
users.push({ name: 'Adarsh', age: 20, address: { city: 'nadiad', street: 'vaniyavad', buildingNo: 8 } });
// this will throw error because incorrect age
// users.push({name:'Adarsh',age:22,address:{city:'nadiad',street:'vaniyavad',buildingNo:8}})
// this will throw error because incorrect address type
// users.push({name:'Adarsh',age:22,address:[{city:'nadiad',street:'vaniyavad',buildingNo:8}]})
console.log(users);
