// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`

class SingleTon {
  private static instance: SingleTon | null = null;
  private count: number = 0;

  // making constructor private so no one outside can
  // make object if SingleTon class
  private constructor() {}

  public static getInstance(): SingleTon {
    if (this.instance === null) {
      this.instance = new SingleTon();
    }
    return this.instance;
  }

  public inc() {
    this.count += 1;
  }

  public display() {
    console.log(this.count);
  }
}

const obj1 = SingleTon.getInstance();
const obj2 = SingleTon.getInstance();

// conditionally check
if (obj1 === obj2) {
  console.log("same");
} else {
  console.log("different");
}

obj1.display();
obj1.inc();

// this will print 1 as the object returned is same
obj2.display();
obj2.inc();

// this will print 2 as the object returned is same
obj1.display();
