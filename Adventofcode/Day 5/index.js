"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function getInput(sourceName) {
    var content = fs.readFileSync(sourceName, { encoding: "utf-8" }).split("\n\n");
    var sessionOne = content[0].split("\n");
    var sessionTwo = content[1].split("\n");
    return [sessionOne, sessionTwo];
}
function mainPartOne() {
    var _a = getInput("./input.txt"), idRanges = _a[0], ids = _a[1];
    var idsNum = ids.map(Number);
    var result = 0;
    idRanges.forEach(function (range) {
        var _a = range.split("-").map(Number), start = _a[0], end = _a[1];
        for (var i = 0; i < idsNum.length; i++) {
            if (idsNum[i] >= start && idsNum[i] <= end) {
                result++;
                idsNum.splice(i, 1);
                i--;
            }
        }
    });
    console.log("Result: ".concat(result));
}
// mainPartOne()
function mainPartTwo() {
    var idRanges = getInput("./input.txt")[0];
    var idRangesNumber = idRanges
        .map(function (r) { return r.split("-").map(Number); })
        .sort(function (a, b) { return a[0] - b[0]; }); // FIX 1
    var handHold = -Infinity;
    var result = 0;
    for (var _i = 0, idRangesNumber_1 = idRangesNumber; _i < idRangesNumber_1.length; _i++) {
        var _a = idRangesNumber_1[_i], start = _a[0], end = _a[1];
        // compute uncovered part
        var effectiveStart = Math.max(start, handHold + 1);
        if (effectiveStart <= end) {
            result += end - effectiveStart + 1;
            handHold = end;
        }
    }
    console.log("Result: ".concat(result));
}
mainPartTwo();
