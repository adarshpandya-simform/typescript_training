"use strict";
// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`
function format(amount) {
    return `${format.currency}${amount.toFixed(2)}`;
}
(function (format) {
    format.currency = "$ ";
})(format || (format = {}));
// works
console.log(format(5));
// this also works
console.log(format.currency);
