"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function getInput(sourceName) {
    var content = fs.readFileSync(sourceName, { encoding: "utf-8" }).split("\n");
    return content;
}
function mainPartOne() {
    var dataset = getInput("./input.txt");
    var signSet = dataset[dataset.length - 1].trim().split(/\s+/);
    var matrix = dataset
        .splice(0, dataset.length - 1)
        .map(function (d) { return d.trim().split(/\s+/).map(Number); });
    var result = 0;
    // console.log(matrix, signSet)
    for (var i = 0; i < matrix[0].length; i++) {
        var temp = matrix[0][i];
        for (var j = 1; j < matrix.length; j++) {
            switch (signSet[i]) {
                case "+":
                    temp += matrix[j][i];
                    break;
                case "*":
                    temp *= matrix[j][i];
                    break;
            }
        }
        // console.log(temp)
        result += temp;
    }
    console.log("Result: ".concat(result));
}
// mainPartOne()
function mainPartTwo() {
    var dataset = getInput("./input.txt");
    var signSet = dataset[dataset.length - 1].trim().split(/\s+/);
    var matrix = dataset.splice(0, dataset.length - 1).map(function (d) { return d.split(""); });
    var stack = [];
    var result = 0;
    for (var i = matrix[0].length - 1; i >= 0; i--) {
        var temp_1 = "";
        for (var j = 0; j < matrix.length; j++) {
            temp_1 = temp_1.concat(matrix[j][i].trim());
        }
        stack.push(Number(temp_1));
    }
    stack.push(0);
    console.table(stack);
    // console.log(signSet)
    var marker = signSet.length - 1;
    var temp = stack[0];
    for (var i = 1; i < stack.length; i++) {
        if (stack[i] == 0) {
            result += temp;
            temp = stack[++i];
            marker--;
            // console.log(temp)
        }
        else {
            switch (signSet[marker]) {
                case "+":
                    temp += stack[i];
                    break;
                case "*":
                    temp *= stack[i];
                    break;
            }
        }
    }
    console.log("Result: ".concat(result));
}
mainPartTwo();
