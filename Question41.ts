// Function to show magicians' names
function show__magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magicianNames: string[] = ["GOGA", "David Copperfield", "Penn Jillette", "Teller"];

// Calling the function to show magicians' names
show__magicians(magicianNames);