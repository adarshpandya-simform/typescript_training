"use strict";
// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`
// declaring UserClass
class UserClass {
    //   constructor
    constructor(name, email) {
        // fields
        this.name = "";
        this.email = "";
        // getDetails method to show user details
        this.getDetails = () => {
            return `${this.name} - ${this.email}`;
        };
        this.name = name;
        this.email = email;
    }
}
// instanciating class, creating object
const userObj = new UserClass("adarsh", "ap@gmail.com");
console.log(userObj.name);
console.log(userObj.email);
console.log(userObj.getDetails());
