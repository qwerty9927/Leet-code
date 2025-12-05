"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function getInput(sourceName) {
    var content = fs.readFileSync(sourceName, { encoding: "utf-8" });
    return content.split("\n");
}
function mainPartOne() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    var dataSet = getInput("./input.txt");
    var matrix = dataSet.map(function (item) {
        return item.split("").map(function (symbol) { return (symbol == "@" ? 1 : 0); });
    });
    var result = 0;
    // console.table(matrix)
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0)
                continue;
            var counter = ((_b = (_a = matrix[i]) === null || _a === void 0 ? void 0 : _a[j - 1]) !== null && _b !== void 0 ? _b : 0) +
                ((_d = (_c = matrix[i]) === null || _c === void 0 ? void 0 : _c[j + 1]) !== null && _d !== void 0 ? _d : 0) +
                ((_f = (_e = matrix[i - 1]) === null || _e === void 0 ? void 0 : _e[j - 1]) !== null && _f !== void 0 ? _f : 0) +
                ((_h = (_g = matrix[i - 1]) === null || _g === void 0 ? void 0 : _g[j]) !== null && _h !== void 0 ? _h : 0) +
                ((_k = (_j = matrix[i - 1]) === null || _j === void 0 ? void 0 : _j[j + 1]) !== null && _k !== void 0 ? _k : 0) +
                ((_m = (_l = matrix[i + 1]) === null || _l === void 0 ? void 0 : _l[j - 1]) !== null && _m !== void 0 ? _m : 0) +
                ((_p = (_o = matrix[i + 1]) === null || _o === void 0 ? void 0 : _o[j]) !== null && _p !== void 0 ? _p : 0) +
                ((_r = (_q = matrix[i + 1]) === null || _q === void 0 ? void 0 : _q[j + 1]) !== null && _r !== void 0 ? _r : 0);
            // console.log(counter, [i, j])
            if (counter < 4) {
                result++;
            }
        }
    }
    console.log("Result: ".concat(result));
}
// mainPartOne()
function mainPartTwo() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    var dataSet = getInput("./input.txt");
    var matrix = dataSet.map(function (item) {
        return item.split("").map(function (symbol) { return (symbol == "@" ? 1 : 0); });
    });
    var shadowMatrix = matrix;
    var result = 0;
    var sumMatrix = function (input) {
        return input.reduce(function (sum, row) { return sum + row.reduce(function (rSum, r) { return rSum + r; }, 0); }, 0);
    };
    do {
        matrix = shadowMatrix.map(function (item) { return __spreadArray([], item, true); });
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 0)
                    continue;
                var counter = ((_b = (_a = matrix[i]) === null || _a === void 0 ? void 0 : _a[j - 1]) !== null && _b !== void 0 ? _b : 0) +
                    ((_d = (_c = matrix[i]) === null || _c === void 0 ? void 0 : _c[j + 1]) !== null && _d !== void 0 ? _d : 0) +
                    ((_f = (_e = matrix[i - 1]) === null || _e === void 0 ? void 0 : _e[j - 1]) !== null && _f !== void 0 ? _f : 0) +
                    ((_h = (_g = matrix[i - 1]) === null || _g === void 0 ? void 0 : _g[j]) !== null && _h !== void 0 ? _h : 0) +
                    ((_k = (_j = matrix[i - 1]) === null || _j === void 0 ? void 0 : _j[j + 1]) !== null && _k !== void 0 ? _k : 0) +
                    ((_m = (_l = matrix[i + 1]) === null || _l === void 0 ? void 0 : _l[j - 1]) !== null && _m !== void 0 ? _m : 0) +
                    ((_p = (_o = matrix[i + 1]) === null || _o === void 0 ? void 0 : _o[j]) !== null && _p !== void 0 ? _p : 0) +
                    ((_r = (_q = matrix[i + 1]) === null || _q === void 0 ? void 0 : _q[j + 1]) !== null && _r !== void 0 ? _r : 0);
                // console.log(counter, [i, j])
                if (counter < 4) {
                    shadowMatrix[i][j] = 0;
                    result++;
                }
            }
        }
    } while (sumMatrix(matrix) != sumMatrix(shadowMatrix));
    // console.table(matrix)
    console.log("Result: ".concat(result));
}
mainPartTwo();
