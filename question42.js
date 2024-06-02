// Function to show magicians' names
function showmagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to make magicians great by modifying the array
function makegreat(magicians) {
    // Map over the array and add "the Great" to each magician's name
    return magicians.map(function (magician) { return magician + "the Great"; });
}
// Array of magician's names
var magician_Names = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Calling the function to make magicians great
var greatMagicians = makegreat(magician_Names);
// Calling the function to show modified magicians' names
showmagicians(greatMagicians);
