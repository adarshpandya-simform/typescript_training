// selectors for inputs, buttons and selectors
const input = document.getElementById("input") as HTMLInputElement;
const clearButton = document.getElementById("clear") as HTMLButtonElement;
const backspaceButton = document.getElementById(
	"backspace"
) as HTMLButtonElement;
const equalButton = document.getElementsByClassName(
	"equal"
)[0] as HTMLButtonElement;
const normalButtons = document.querySelectorAll(
	".normal-inp"
) as NodeListOf<HTMLButtonElement>;
const modButton = document.getElementById("modX") as HTMLButtonElement;
const plusMinusButton = document.getElementById(
	"plusminus"
) as HTMLButtonElement;
const pieButton = document.getElementById("pie") as HTMLButtonElement;
const eButton = document.getElementById("e") as HTMLButtonElement;
const sqrtButton = document.getElementById("sqrt") as HTMLButtonElement;
const exponentialButton = document.getElementById(
	"exponential"
) as HTMLButtonElement;
const squareButton = document.getElementById("square") as HTMLButtonElement;
const divByOne = document.getElementById("div-by-one") as HTMLButtonElement;
const logButton = document.getElementById("log") as HTMLButtonElement;
const inButton = document.getElementById("In") as HTMLButtonElement;
const tenExp = document.getElementById("ten-exp") as HTMLButtonElement;
const expButton = document.getElementById("exp") as HTMLButtonElement;
const MC = document.getElementById("clear-memory") as HTMLButtonElement;
const MR = document.getElementById("show-memory") as HTMLButtonElement;
const MP = document.getElementById("add-memory") as HTMLButtonElement;
const MD = document.getElementById("remove-last") as HTMLButtonElement;
const MS = document.getElementById("memory-store") as HTMLButtonElement;
const trigSelector = document.getElementById("trig") as HTMLSelectElement;
const funcSelector = document.getElementById("func") as HTMLSelectElement;

// constant values for pi,e
const PI_VALUE: number = 3.14;
const E_VALUE: number = 2.718281828;

// array,ms variable for memory operations
let memory: Array<number> = [];
let ms: number = 0;

// helper function which calculates factorial
const factorial = (num: number): number =>
	num === 0 || num === 1 ? 1 : num * factorial(num - 1);

// equal button onClick listener
equalButton.addEventListener("click", () => {
	const inputExp: string = input.value;
	// let's check if it's valid
	if (inputExp) {
		// logic for factorial
		if (inputExp.includes("!")) {
			let till1: number = inputExp.lastIndexOf("+");
			let till2: number = inputExp.lastIndexOf("-");
			let till3: number = inputExp.lastIndexOf("*");
			let till4: number = inputExp.lastIndexOf("/");
			let maxIndex: number = Math.max(till1, till2, till3, till4);
			// checking maxIndex value
			if (maxIndex <= -1) {
				let res: number = factorial(+inputExp.slice(0, -1));
				input.value = String(res);
			} else {
				let num: string = inputExp.slice(maxIndex + 1, -1);
				let fact = factorial(+num);
				let res = eval(`${inputExp.slice(0, maxIndex + 1)}${fact}`);
				input.value = res;
			}
			// normal execution flow (if not factorial)
		} else {
			try {
				let result = eval(inputExp);
				input.value = result;
			} catch (error) {
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
			} catch (error) {
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
normalButtons.forEach((button: HTMLButtonElement) => {
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
	let num: number = +input.value;
	if (num < 0) {
		num *= -1;
	}
	input.value = String(num);
});

// applying onClick event listener for '+/-' button functionality
plusMinusButton.addEventListener("click", () => {
	let num: number = +input.value;
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
	let num: number = +input.value;
	let res: number = Math.sqrt(num);
	input.value = String(res);
});

// applying onClick event listener for 'square of the value' button functionality
squareButton.addEventListener("click", () => {
	let num: number = +input.value;
	input.value = String(num * num);
});

// applying onClick event listener for '1/x' button functionality
divByOne.addEventListener("click", () => {
	let num: number = +input.value;
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
	let num: number = +input.value;
	input.value = String(Math.log10(num));
});

// applying onClick event listener for 'In' button functionality
inButton.addEventListener("click", () => {
	let num: number = +input.value;
	input.value = String(Math.log(num));
});

// applying onClick event listener for 'exp of 10' button functionality
tenExp.addEventListener("click", () => {
	let num: number = +input.value;
	input.value = String(10 ** num);
});

// event listeners for memory operations

// applying onClick event listener for 'M+' button functionality
MP.addEventListener("click", () => {
	let num: number = +input.value;
	memory.push(num);
});

// applying onClick event listener for 'MS' button functionality
MS.addEventListener("click", () => {
	if (ms === 0) {
		let num: number = +input.value;
		ms = num;
		input.value = String(ms);
	} else {
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
		let sum: number = memory.reduce((a, b) => a + b);
		input.value = String(sum);
	} else {
		input.value = String(0);
	}
});

// applying onClick event listener for 'MC' button functionality
MC.addEventListener("click", () => {
	memory = [];
});

// selector event listeners

// applying onChange event listener for trigonometry selector
trigSelector.addEventListener("change", (e: Event) => {
	let num: number = +input.value;

	// calculating values based on clicked trig function
	if ((<HTMLSelectElement>e.target).value === "sin") {
		input.value = String(Math.sin(Math.PI * (num / 180))).slice(0, 3);
	} else if ((<HTMLSelectElement>e.target).value === "cos") {
		input.value = String(Math.cos(Math.PI * (num / 180))).slice(0, 3);
	} else if ((<HTMLSelectElement>e.target).value === "cot") {
		input.value = String(
			Math.sin((Math.PI * (num / 180)) / Math.cos(Math.PI * (num / 180)))
		).slice(0, 3);
	} else if ((<HTMLSelectElement>e.target).value === "tan") {
		input.value = String(
			Math.cos((Math.PI * (num / 180)) / Math.sin(Math.PI * (num / 180)))
		).slice(0, 3);
	} else if ((<HTMLSelectElement>e.target).value === "sec") {
		input.value = String(1 / Math.cos(Math.PI * (num / 180)));
	} else if ((<HTMLSelectElement>e.target).value === "cosec") {
		input.value = String(1 / Math.sin(Math.PI * (num / 180)));
	} else if ((<HTMLSelectElement>e.target).value === "hyp") {
		input.value = String(Math.hypot(num)).slice(0, 3);
	}
});

// applying onChange event listener for mathematical functionality selector
funcSelector.addEventListener("change", (e: Event) => {
	let num: number = +input.value;

	// calculating values based on clicked mathematical function
	if ((<HTMLSelectElement>e.target).value === "modX") {
		if (num < 0) {
			num *= -1;
		}
	} else if ((<HTMLSelectElement>e.target).value === "floorX") {
		num = Math.floor(num);
	} else if ((<HTMLSelectElement>e.target).value === "ceilX") {
		num = Math.ceil(num);
	} else if ((<HTMLSelectElement>e.target).value === "randValue") {
		num = +(input.value + Math.random());
	}
	input.value = String(num);
});
