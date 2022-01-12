// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`

class UserClass {
  name: string = "";
  email: string = "";
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  getDetails = (): string => {
    return `${this.name} - ${this.email}`;
  };
}

const userObj = new UserClass("adarsh", "ap@gmail.com");
console.log(userObj.name);
console.log(userObj.email);
console.log(userObj.getDetails());
