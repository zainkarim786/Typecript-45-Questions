"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Version 1: Passes the if test (alien_color is 'green')
var alien_color_pass = 'green';
if (alien_color_pass === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else {
    console.log("No points earned this time.");
}
// Version 2: Fails the if test (alien_color is 'yellow')
var alien_color_fail = 'yellow';
if (alien_color_fail === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
else {
    console.log("No points earned this time.");
}
