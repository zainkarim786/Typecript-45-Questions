//Program 1: Sum Numbers
// Simple Sum Program - Calculates and prints the sum of two numbers.
function sum(a, b) {
    return a + b;
}
// Example usage:
var a = 582;
var b = 2356;
var result = sum(a, b);
console.log("Sum of ".concat(a, " and ").concat(b, " is : ").concat(result)); //Output sum of 582 and 2356 is : 2938
//Program 2: Check EvenOdd
// Even/Odd Checker - Checks and prints whether a given number is even or odd.
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log("".concat(num, " is Even Number"));
    }
    else {
        console.log("".concat(num, " is Odd Number"));
    }
}
// Example usage:
var NumbertoCheck = Math.random();
checkEvenOdd(NumbertoCheck); // Output is random
