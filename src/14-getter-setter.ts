// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`

// declaring UserClassWithGetterSetter
class UserClassWithGetterSetter {
  // fields
  name: string = "";
  email: string = "";

  // getters and setters
  set myName(name: string) {
    this.name = name;
  }

  set myEmail(email: string) {
    this.email = email;
  }
  get myName() {
    return this.name;
  }

  get myEmail(): string {
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
