var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define an array of places to visit
var placesToVisit = ["Makkah", "Madina", "Kashmir", "Palestin", "Dubai"];
// Print the array in its original order
console.log("Original Order", placesToVisit);
// Print the array in alphabetical order without modifying the actual list
var sortedarray = __spreadArray([], placesToVisit, true).sort();
console.log("Alphabatical Order:", sortedarray);
// Show that the original array is still in its original order
console.log("Oringinal Order (after sorting):", placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
var reversesortedarray = __spreadArray([], placesToVisit, true).sort().reverse();
console.log("Reverse Alphabetical Order:", reversesortedarray);
// Show that the original array is still in its original order
console.log("Original Order (after reverse sorting):", placesToVisit);
// Reverse the order of the original list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Alphabetical Order:", placesToVisit);
// Sort the array in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse Alphabetical Order:", placesToVisit);
