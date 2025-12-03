"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function getInput(sourceName) {
    var content = fs.readFileSync(sourceName, { encoding: "utf-8" });
    return content.split(",");
}
function mainPartOne() {
    var dataSet = getInput("./input.txt");
    var result = 0;
    var symmetricString = function (input) {
        var pivot = Math.floor(input.length / 2);
        return input.substring(0, pivot) == input.substring(pivot);
    };
    dataSet.forEach(function (item, index) {
        var _a = item.split("-").map(Number), start = _a[0], end = _a[1];
        for (var i = start; i <= end; i++) {
            if (symmetricString(i.toString())) {
                result += i;
            }
        }
    });
    console.log("Result: ".concat(result));
}
// mainPartOne()
function mainPartTwo() {
    var dataSet = getInput("./input.txt");
    var result = 0;
    var repeatedString = function (input) {
        return (input + input).substring(1, input.length * 2 - 1).includes(input);
    };
    dataSet.forEach(function (item, index) {
        var _a = item.split("-").map(Number), start = _a[0], end = _a[1];
        for (var i = start; i <= end; i++) {
            if (repeatedString(i.toString())) {
                result += i;
            }
        }
    });
    console.log("Result: ".concat(result));
}
mainPartTwo();
