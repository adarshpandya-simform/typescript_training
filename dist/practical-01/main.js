"use strict";
// selectors for inputs, buttons and selectors
const input = document.getElementById("input");
const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backspace");
const equalButton = document.getElementsByClassName("equal")[0];
const normalButtons = document.querySelectorAll(".normal-inp");
const modButton = document.getElementById("modX");
const plusMinusButton = document.getElementById("plusminus");
const pieButton = document.getElementById("pie");
const eButton = document.getElementById("e");
const sqrtButton = document.getElementById("sqrt");
const exponentialButton = document.getElementById("exponential");
const squareButton = document.getElementById("square");
const divByOne = document.getElementById("div-by-one");
const logButton = document.getElementById("log");
const inButton = document.getElementById("In");
const tenExp = document.getElementById("ten-exp");
const expButton = document.getElementById("exp");
const MC = document.getElementById("clear-memory");
const MR = document.getElementById("show-memory");
const MP = document.getElementById("add-memory");
const MD = document.getElementById("remove-last");
const MS = document.getElementById("memory-store");
const trigSelector = document.getElementById("trig");
const funcSelector = document.getElementById("func");
// constant values for pi,e
const PI_VALUE = 3.14;
const E_VALUE = 2.718281828;
// array,ms variable for memory operations
let memory = [];
let ms = 0;
// helper function which calculates factorial
const factorial = (num) => num === 0 || num === 1 ? 1 : num * factorial(num - 1);
// equal button onClick listener
equalButton.addEventListener("click", () => {
    const inputExp = input.value;
    // let's check if it's valid
    if (inputExp) {
        // logic for factorial
        if (inputExp.includes("!")) {
            let till1 = inputExp.lastIndexOf("+");
            let till2 = inputExp.lastIndexOf("-");
            let till3 = inputExp.lastIndexOf("*");
            let till4 = inputExp.lastIndexOf("/");
            let maxIndex = Math.max(till1, till2, till3, till4);
            // checking maxIndex value
            if (maxIndex <= -1) {
                let res = factorial(+inputExp.slice(0, -1));
                input.value = String(res);
            }
            else {
                let num = inputExp.slice(maxIndex + 1, -1);
                let fact = factorial(+num);
                let res = eval(`${inputExp.slice(0, maxIndex + 1)}${fact}`);
                input.value = res;
            }
            // normal execution flow (if not factorial)
        }
        else {
            try {
                let result = eval(inputExp);
                input.value = result;
            }
            catch (error) {
                input.value = "";
                console.log(error);
            }
        }
        // condition to check exponential
        if (inputExp.includes("^")) {
            // replacing ^ with **
            input.value = inputExp.replace("^", "**");
            try {
                let result = eval(input.value);
                input.value = result;
            }
            catch (error) {
                input.value = "";
                console.log(error);
            }
        }
    }
    // else for invalid mathematical expression
    else {
        alert("not valid");
        input.value = "";
    }
});
// applying onClick event listener for normal buttons
normalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        input.value += button.value;
    });
});
// clearing values on clearButton click
clearButton.addEventListener("click", () => {
    input.value = "";
});
// clearing last value on backspaceButton click
backspaceButton.addEventListener("click", () => {
    input.value = input.value.slice(0, -1);
});
// applying onClick event listener for '|x|' functionality
modButton.addEventListener("click", () => {
    let num = +input.value;
    if (num < 0) {
        num *= -1;
    }
    input.value = String(num);
});
// applying onClick event listener for '+/-' button functionality
plusMinusButton.addEventListener("click", () => {
    let num = +input.value;
    num *= -1;
    input.value = String(num);
});
// applying onClick event listener for 'PI' button functionality
pieButton.addEventListener("click", () => {
    input.value += PI_VALUE;
});
// applying onClick event listener for 'e' button functionality
eButton.addEventListener("click", () => {
    input.value += E_VALUE;
});
// applying onClick event listener for 'sqrt of the value' button functionality
sqrtButton.addEventListener("click", () => {
    let num = +input.value;
    let res = Math.sqrt(num);
    input.value = String(res);
});
// applying onClick event listener for 'square of the value' button functionality
squareButton.addEventListener("click", () => {
    let num = +input.value;
    input.value = String(num * num);
});
// applying onClick event listener for '1/x' button functionality
divByOne.addEventListener("click", () => {
    let num = +input.value;
    input.value = String(1 / num);
});
// applying onClick event listener for 'mod' button functionality
exponentialButton.addEventListener("click", () => {
    input.value += "^";
});
// applying onClick event listener for 'mod' button functionality
expButton.addEventListener("click", () => {
    input.value += "^";
});
// applying onClick event listener for 'log' button functionality
logButton.addEventListener("click", () => {
    let num = +input.value;
    input.value = String(Math.log10(num));
});
// applying onClick event listener for 'In' button functionality
inButton.addEventListener("click", () => {
    let num = +input.value;
    input.value = String(Math.log(num));
});
// applying onClick event listener for 'exp of 10' button functionality
tenExp.addEventListener("click", () => {
    let num = +input.value;
    input.value = String(Math.pow(10, num));
});
// event listeners for memory operations
// applying onClick event listener for 'M+' button functionality
MP.addEventListener("click", () => {
    let num = +input.value;
    memory.push(num);
});
// applying onClick event listener for 'MS' button functionality
MS.addEventListener("click", () => {
    if (ms === 0) {
        let num = +input.value;
        ms = num;
        input.value = String(ms);
    }
    else {
        input.value += ms;
    }
});
// applying onClick event listener for 'MD' button functionality
MD.addEventListener("click", () => {
    memory.pop();
});
// applying onClick event listener for 'MR' button functionality
MR.addEventListener("click", () => {
    if (memory.length !== 0) {
        let sum = memory.reduce((a, b) => a + b);
        input.value = String(sum);
    }
    else {
        input.value = String(0);
    }
});
// applying onClick event listener for 'MC' button functionality
MC.addEventListener("click", () => {
    memory = [];
});
// selector event listeners
// applying onChange event listener for trigonometry selector
trigSelector.addEventListener("change", (e) => {
    let num = +input.value;
    // calculating values based on clicked trig function
    if (e.target.value === "sin") {
        input.value = String(Math.sin(Math.PI * (num / 180))).slice(0, 3);
    }
    else if (e.target.value === "cos") {
        input.value = String(Math.cos(Math.PI * (num / 180))).slice(0, 3);
    }
    else if (e.target.value === "cot") {
        input.value = String(Math.sin((Math.PI * (num / 180)) / Math.cos(Math.PI * (num / 180)))).slice(0, 3);
    }
    else if (e.target.value === "tan") {
        input.value = String(Math.cos((Math.PI * (num / 180)) / Math.sin(Math.PI * (num / 180)))).slice(0, 3);
    }
    else if (e.target.value === "sec") {
        input.value = String(1 / Math.cos(Math.PI * (num / 180)));
    }
    else if (e.target.value === "cosec") {
        input.value = String(1 / Math.sin(Math.PI * (num / 180)));
    }
    else if (e.target.value === "hyp") {
        input.value = String(Math.hypot(num)).slice(0, 3);
    }
});
// applying onChange event listener for mathematical functionality selector
funcSelector.addEventListener("change", (e) => {
    let num = +input.value;
    // calculating values based on clicked mathematical function
    if (e.target.value === "modX") {
        if (num < 0) {
            num *= -1;
        }
    }
    else if (e.target.value === "floorX") {
        num = Math.floor(num);
    }
    else if (e.target.value === "ceilX") {
        num = Math.ceil(num);
    }
    else if (e.target.value === "randValue") {
        num = +(input.value + Math.random());
    }
    input.value = String(num);
});
