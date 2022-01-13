"use strict";
// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`
class SingleTon {
    // making constructor private so no one outside can
    // make object if SingleTon class
    constructor() {
        this.count = 0;
    }
    static getInstance() {
        if (this.instance === null) {
            this.instance = new SingleTon();
        }
        return this.instance;
    }
    inc() {
        this.count += 1;
    }
    display() {
        console.log(this.count);
    }
}
SingleTon.instance = null;
const obj1 = SingleTon.getInstance();
const obj2 = SingleTon.getInstance();
// conditionally check
if (obj1 === obj2) {
    console.log("same");
}
else {
    console.log("different");
}
obj1.display();
obj1.inc();
// this will print 1 as the object returned is same
obj2.display();
obj2.inc();
// this will print 2 as the object returned is same
obj1.display();
