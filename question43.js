var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to show magicians' names
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to make magicians great by modifying the array
function make_great(magicians) {
    // Map over the array and add "the Great" to each magician's name
    return magicians.map(function (magician) { return magician + " the Great"; });
}
// Array of magician's names
var originalMagicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Creating a copy of the original array
var copiedMagicians = __spreadArray([], originalMagicians, true);
// Calling the function to make magicians great with the copied array
var great_Magicians = make_great(copiedMagicians);
// Calling the function to show original magicians' names
console.log("Original Magicians:");
show_magicians(originalMagicians);
// Calling the function to show modified magicians' names
console.log("\nMagicians with 'the Great' added:");
show_magicians(great_Magicians);
