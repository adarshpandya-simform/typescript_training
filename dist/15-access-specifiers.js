"use strict";
// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`
// declaring UserClassWithAccessSpecifiers
class UserClassWithAccessSpecifiers {
    constructor(name, email, password) {
        // fields
        this.name = "";
        this.email = "";
        this.password = "";
        this.name = name;
        this.password = password;
        this.email = email;
    }
    getPassword() {
        // private/public methods can access private vars
        console.log(this.password);
    }
    getDetails() {
        console.log(this.name);
        console.log(this.email);
        // public methods can access private methods
        this.getPassword();
    }
}
// instanciating class, creating object
const u1 = new UserClassWithAccessSpecifiers("ap", "ap0@gmail.com", "123456");
console.log(u1.name);
console.log(u1.email);
// this will throw error
// console.log(u1.password)
u1.getDetails();
// this will throw error
// u1.getPassword();
