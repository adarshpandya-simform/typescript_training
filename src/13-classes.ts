// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`

// declaring UserClass
class UserClass {
  // fields
  name: string = "";
  email: string = "";

  //   constructor
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  // getDetails method to show user details
  getDetails = (): string => {
    return `${this.name} - ${this.email}`;
  };
}

// instanciating class, creating object
const userObj = new UserClass("adarsh", "ap@gmail.com");
console.log(userObj.name);
console.log(userObj.email);
console.log(userObj.getDetails());
