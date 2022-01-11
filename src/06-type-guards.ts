// to run this file, type in this comman in 
// command prompt => `ts-node {filename}.ts`

// defending unknown types with type-guards
let myName: unknown = 'adarsh'

// type guarding
if (typeof myName === 'string') {
    console.log(myName.split(''))
}

myName = new Promise<void>((resolve, reject) => {
    resolve()
})

if (myName instanceof Promise) {
    myName.then(()=> console.log("resolved"))
}

let myUnknownType = { name: 'ap', email: 'ap@gmail.com' }


type HasEmail = {
    has:boolean
}

// custom type guard
function hasEmail(x: any): x is HasEmail{
    return typeof x.name==='string' && typeof x.email ==='string'
}

if (hasEmail(myUnknownType)) {
    console.log(myUnknownType.email)
}

// pluck out undefined with typeguard
function isDefined<T>(arg: T | undefined): arg is T{
    return typeof arg!== 'undefined'
}

const arr = [1, 2, 3,undefined, 4]
console.log(arr.filter(isDefined))