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

const PI_VALUE: number = 3.14;
const E_VALUE: number = 2.718281828;

let memory: Array<number> = [];
let ms: number = 0;

const factorial = (num: number): number =>
	num === 0 || num === 1 ? 1 : num * factorial(num - 1);

equalButton.addEventListener("click", () => {
	const inputExp: string = input.value;
	// let's check if it's valid
	if (inputExp) {
		if (inputExp.includes("!")) {
			let till1: number = inputExp.lastIndexOf("+");
			let till2: number = inputExp.lastIndexOf("-");
			let till3: number = inputExp.lastIndexOf("*");
			let till4: number = inputExp.lastIndexOf("/");
			let maxIndex: number = Math.max(till1, till2, till3, till4);

			if (maxIndex <= -1) {
				let res: number = factorial(+inputExp.slice(0, -1));
				input.value = String(res);
			} else {
				let num: string = inputExp.slice(maxIndex + 1, -1);
				let fact = factorial(+num);
				let res = eval(`${inputExp.slice(0, maxIndex + 1)}${fact}`);
				input.value = res;
			}
		} else {
			try {
				let result = eval(inputExp);
				input.value = result;
			} catch (error) {
				input.value = "";
				console.log(error);
			}
		}

		if (inputExp.includes("^")) {
			input.value = inputExp.replace("^", "**");
			try {
				let result = eval(input.value);
				input.value = result;
			} catch (error) {
				input.value = "";
				console.log(error);
			}
		}
	} else {
		alert("not valid");
		input.value = "";
	}
});

normalButtons.forEach((button: HTMLButtonElement) => {
	button.addEventListener("click", () => {
		input.value += button.value;
	});
});

clearButton.addEventListener("click", () => {
	input.value = "";
});

backspaceButton.addEventListener("click", () => {
	input.value = input.value.slice(0, -1);
});

modButton.addEventListener("click", () => {
	let num: number = +input.value;
	if (num < 0) {
		num *= -1;
	}
	input.value = String(num);
});

plusMinusButton.addEventListener("click", () => {
	let num: number = +input.value;
	num *= -1;
	input.value = String(num);
});

pieButton.addEventListener("click", () => {
	input.value += PI_VALUE;
});

eButton.addEventListener("click", () => {
	input.value += E_VALUE;
});

sqrtButton.addEventListener("click", () => {
	let num: number = +input.value;
	let res: number = Math.sqrt(num);
	input.value = String(res);
});

squareButton.addEventListener("click", () => {
	let num: number = +input.value;
	input.value = String(num * num);
});

divByOne.addEventListener("click", () => {
	let num: number = +input.value;
	input.value = String(1 / num);
});

exponentialButton.addEventListener("click", () => {
	input.value += "^";
});

expButton.addEventListener("click", () => {
	input.value += "^";
});

logButton.addEventListener("click", () => {
	let num: number = +input.value;
	input.value = String(Math.log10(num));
});

inButton.addEventListener("click", () => {
	let num: number = +input.value;
	input.value = String(Math.log(num));
});

tenExp.addEventListener("click", () => {
	let num: number = +input.value;
	input.value = String(10 ** num);
});

MP.addEventListener("click", () => {
	let num: number = +input.value;
	memory.push(num);
});

MS.addEventListener("click", () => {
	if (ms === 0) {
		let num: number = +input.value;
		ms = num;
		input.value = String(ms);
	} else {
		input.value += ms;
	}
});

MD.addEventListener("click", () => {
	memory.pop();
});

MR.addEventListener("click", () => {
	if (memory.length !== 0) {
		let sum: number = memory.reduce((a, b) => a + b);
		input.value = String(sum);
	} else {
		input.value = String(0);
	}
});

MC.addEventListener("click", () => {
	memory = [];
});

trigSelector.addEventListener("change", (e: Event) => {
	let num: number = +input.value;
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

funcSelector.addEventListener("change", (e: Event) => {
	let num: number = +input.value;
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
