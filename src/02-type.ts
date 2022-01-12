// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`

type Address = {
  city: string;
  street: string;
  buildingNo: number;
};

type User = {
  name: string;
  age: 18 | 19 | 20;
  address: Address;
};

let users: Array<User> = [];
users.push({
  name: "Adarsh",
  age: 20,
  address: { city: "nadiad", street: "vaniyavad", buildingNo: 8 },
});

// this will throw error because incorrect age
// users.push({name:'Adarsh',age:22,address:{city:'nadiad',street:'vaniyavad',buildingNo:8}})

// this will throw error because incorrect address type
// users.push({name:'Adarsh',age:22,address:[{city:'nadiad',street:'vaniyavad',buildingNo:8}]})

console.log(users);
