// Example array of people 

const people = ["Zain", "Haris", "Hamza", "Sana", "Ayeasha"]

// Function to print personalized messages

function personalizedmessages(names:string[]): void{
    for(const name of names){
        const message = `Hello, ${name}! This is a personalized message for you.`;
        console.log(message);
    }
}
// Call the function with the array of people

personalizedmessages(people);