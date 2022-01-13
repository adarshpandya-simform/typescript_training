"use strict";
// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing class Calculator
const _21_import_exports_1 = __importDefault(require("./21-import-exports"));
let c = new _21_import_exports_1.default();
console.log(c.sum(10, 5));
console.log(c.sub(10, 5));
console.log(c.mul(10, 5));
console.log(c.div(10, 5));
