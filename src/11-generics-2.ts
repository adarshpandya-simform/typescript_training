// to run this file, type in this comman in 
// command prompt => `ts-node {filename}.ts`

// using array generic
let namesOfFriend: Array<string> = Array<string>()
namesOfFriend.push('jeet')
namesOfFriend.push('meet')
namesOfFriend.push('smit')

console.log(namesOfFriend)

const numOfFriend:Array<number> = [123,456,789]

// creating a function which returns last element of number array
const returnLastElemNumber = (arr: Array<number>) => {
    return arr[arr.length-1]
}

console.log(returnLastElemNumber(numOfFriend))

// throws error
// console.log(returnLastElemNumber(namesOfFriend))

const returnLastElemString = (arr: Array<string>) => {
    return arr[arr.length-1]
}

// throws error
// console.log(returnLastElemString(numOfFriend))

console.log(returnLastElemString(namesOfFriend))


// creating a reusable function using generic

const returnLastElem = <T>(arr: Array<T>) => {
    return arr[arr.length-1]
}

console.log(returnLastElem(numOfFriend))
console.log(returnLastElem(namesOfFriend))