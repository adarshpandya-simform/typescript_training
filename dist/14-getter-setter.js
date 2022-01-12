"use strict";
// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`
// declaring UserClassWithGetterSetter
class UserClassWithGetterSetter {
    constructor() {
        // fields
        this.name = "";
        this.email = "";
    }
    // getters and setters
    set myName(name) {
        this.name = name;
    }
    set myEmail(email) {
        this.email = email;
    }
    get myName() {
        return this.name;
    }
    get myEmail() {
        return this.email;
    }
}
// instanciating class, creating object
const userObject = new UserClassWithGetterSetter();
// setting values
userObject.myName = "adarsh";
userObject.myEmail = "ap0@gmail.com";
// getting values
console.log(userObject.myEmail);
console.log(userObject.myName);
console.log(userObject.name);
console.log(userObject.email);
