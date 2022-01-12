// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`

// creating a reusable interface with generic
interface wrapperValue<X> {
  value: X;
}

let { value }: wrapperValue<String[]> = { value: [] };
value.push("a");
value.push("b");
value.push("c");
console.log(value);

let data: wrapperValue<Number | String> = { value: 0 };
data.value = "";
data.value = "Adarsh";
data.value = 1234;

// throws erorr
// data.value = false

// throws error
// data.value = null

// throws error
// data.value = {name:'adarsh'}

console.log(data);
