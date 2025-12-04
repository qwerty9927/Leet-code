"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function getInput(sourceName) {
    var content = fs.readFileSync(sourceName, { encoding: "utf-8" });
    return content.split("\n");
}
function mainPartOne() {
    var dataSet = getInput("./input.txt");
    var result = 0;
    dataSet.forEach(function (item) {
        var largest = 0;
        var secondLargestOnLeft = 0;
        var secondLargestOnRight = 0;
        var pivot = 0;
        for (var i = 0; i < item.length; i++) {
            var num = parseInt(item[i]);
            if (num > largest) {
                largest = num;
                pivot = i;
            }
        }
        for (var i = pivot + 1; i < item.length; i++) {
            var num = parseInt(item[i]);
            secondLargestOnRight = num > secondLargestOnRight ? num : secondLargestOnRight;
        }
        for (var i = pivot - 1; i >= 0; i--) {
            var num = parseInt(item[i]);
            secondLargestOnLeft = num > secondLargestOnLeft ? num : secondLargestOnLeft;
        }
        if (secondLargestOnRight == 0) {
            result += secondLargestOnLeft * 10 + largest;
        }
        else {
            result += largest * 10 + secondLargestOnRight;
        }
    });
    console.log("Result: ".concat(result));
}
// mainPartOne()
function mainPartTwo() {
    var dataSet = getInput("./input.txt");
    var result = BigInt(0);
    dataSet.forEach(function (item) {
        var largestFirstNumber = 0;
        var pivot = 0;
        var expectEach = [];
        for (var i = 0; i < item.length - 11; i++) {
            var num = parseInt(item[i]);
            if (num > largestFirstNumber) {
                largestFirstNumber = num;
                pivot = i;
            }
        }
        expectEach.push(largestFirstNumber);
        var counter = 10;
        while (expectEach.length < 12) {
            var largest = 0;
            // console.log(pivot + 1)
            for (var i = pivot + 1; i < item.length - counter; i++) {
                var num = parseInt(item[i]);
                if (num > largest) {
                    largest = num;
                    pivot = i;
                }
            }
            // console.log(item.length - counter, counter, largest)
            expectEach.push(largest);
            counter--;
        }
        result += BigInt(expectEach.join(""));
    });
    console.log("Result: ".concat(result));
}
mainPartTwo();
