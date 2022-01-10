// to run this file, type in this comman in 
// command prompt => `ts-node {filename}.ts`

interface Icar {
    speed: number;
    havePetrol: boolean;
    run: () => void;
    stop: () => void;
    details: () => string;
    slow: (num: number) => string;
    fast: (num: number) => string;
    // declare optional props using '?'
    hasAC?: boolean;
}

let cars: Array<Icar> = []

// notice that TS compiler don't complain when we can't implement optional value (hasAC)
cars = [...cars, {
    speed: 10, havePetrol: true, run: () => {
    console.log("run method")
    }, slow: (num) => {
        console.log("slow method")
        return '';
    }, fast: (num) => { console.log("car fast"); return '' }, stop: () => { console.log("stop") }, details: () => `anything`
}]
    
// other way
class Car implements Icar{
    speed: number;
    havePetrol: boolean;
    hasAC?: boolean | undefined= false;
    constructor(speed: number, havePetrol: boolean, hasAC?:boolean) {
        this.speed = speed;
        this.havePetrol = havePetrol;
        this.hasAC = hasAC;
    }

    run() {
        if (this.havePetrol) {
            console.log("car is running")
        } else {
            console.log("car won't run")
        }
    }

    stop() {
        this.speed = 0;
        console.log("car stopped")
    }

    details() {
        return `${this.havePetrol} ${this?.hasAC} ${this.speed}`
    };
    
    slow(num:number) {
        this.speed -= num;
        console.log(this.speed)
        return this.speed.toString();
    }

    fast(num:number) {
        this.speed += num;
        console.log(this.speed)
        return this.speed.toString();
    }
}

let honda = new Car(10, true, false)
console.log(honda.details())
honda.run()
honda.fast(50)
honda.slow(20)
console.log(honda.details())
honda.stop()