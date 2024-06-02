// Function to show magicians' names
function showmagicians(magicians: string[]): void{
    for(let magician of magicians) {
        console.log(magician);
    }
}

// Function to make magicians great by modifying the array
function makegreat(magicians: string[]): string[] {
    // Map over the array and add "the Great" to each magician's name
    return magicians.map(magician => magician + "the Great");
}
// Array of magician's names
let magician_Names: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Calling the function to make magicians great
let greatMagicians: string[] = makegreat(magician_Names)

// Calling the function to show modified magicians' names
showmagicians(greatMagicians);