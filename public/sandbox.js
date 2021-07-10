"use strict";
// let greet: Function;
// example 1
var greet;
greet = function (name, greeting) {
    console.log("" + name);
};
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " and " + ninja.age);
};
