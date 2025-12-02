"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function getInput(sourceName) {
    var content = fs.readFileSync(sourceName, { encoding: "utf-8" });
    return content.split("\n");
}
function mainPartOne() {
    var minOrderOfDial = 0;
    var maxOrderOfDial = 100;
    var initOrderOfDial = 50;
    var result = 0;
    var dataSet = getInput("./input.txt");
    dataSet.reduce(function (previous, current, index) {
        var pointLocation;
        var direction = current.charAt(0);
        var value = parseInt(current.substring(1)) % 100;
        if (direction == "R") {
            pointLocation = previous + value;
        }
        else {
            pointLocation = previous - value;
        }
        if (pointLocation < minOrderOfDial) {
            pointLocation += maxOrderOfDial;
        }
        if (pointLocation > maxOrderOfDial) {
            pointLocation -= maxOrderOfDial;
        }
        if (pointLocation == maxOrderOfDial) {
            pointLocation = minOrderOfDial;
        }
        if (pointLocation == minOrderOfDial)
            result++;
        return pointLocation;
    }, initOrderOfDial);
    console.log(result);
}
// mainPartOne()
function mainPartTwo() {
    var minOrderOfDial = 0;
    var maxOrderOfDial = 100;
    var initOrderOfDial = 50;
    var result = 0;
    var dataSet = getInput("./input.txt");
    dataSet.reduce(function (previous, current, index) {
        var pointLocation;
        var direction = current.charAt(0);
        var value = parseInt(current.substring(1)) % 100;
        result += Math.floor(parseInt(current.substring(1)) / 100);
        if (direction == "R") {
            pointLocation = previous + value;
        }
        else {
            pointLocation = previous - value;
        }
        if (pointLocation < minOrderOfDial) {
            if (previous != 0) {
                result++;
            }
            pointLocation += maxOrderOfDial;
        }
        if (pointLocation > maxOrderOfDial) {
            if (previous != 0) {
                result++;
            }
            pointLocation -= maxOrderOfDial;
        }
        if (pointLocation == maxOrderOfDial) {
            pointLocation = minOrderOfDial;
        }
        if (pointLocation == minOrderOfDial)
            result++;
        console.log(pointLocation);
        console.log("Cycle: ".concat(result));
        return pointLocation;
    }, initOrderOfDial);
    console.log(result);
}
mainPartTwo();
