// to run this file, type in this comman in 
// command prompt => `nodemon {filename}.ts`

//typescript support types in functional params to decide
// which types are coming in as param

// in typescript we can also decide which type of value 
// a function can return

// example - param data type
function sum(num1: number, num2: number) {
    return num1+num2
}

// a function with fixed return type
function sumWithReturnType(num1: number, num2: number):number
{
    // this will throw error
    // return ''
    // this will throw error
    // return `${num1+num2}`

    return num1+num2
}

// using data types in arrow functions
const multiply = (num1: number, num2: number) => {
    return num1*num2
}

const multiplyWithReturnType = (num1: number, num2: number):number => {
    // this will throw error
    // return ''
    // this will throw error
    // return `${num1+num2}`
    // returning null or undefined will throw error
    return num1 * num2;
}

console.log(sum(1,2))
console.log(sumWithReturnType(2,2))
console.log(multiply(10,20))
console.log(multiplyWithReturnType(20,20))