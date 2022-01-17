"use strict";
// to run this file, type in this comman in
// command prompt => `ts-node {filename}.ts`
Object.defineProperty(exports, "__esModule", { value: true });
// declaring a dummy express namespace with use and getfunction
var express;
(function (express) {
    function use(callback) {
        callback();
    }
    express.use = use;
    function get(url, callback) {
        console.log(`get request to ${url}`);
        let req = { body: null, headers: null, params: null };
        let res = {
            text: () => null,
            json: () => null,
            send: () => null,
        };
        callback(req, res);
    }
    express.get = get;
})(express || (express = {}));
exports.default = express;
