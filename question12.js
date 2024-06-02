// Example array of people 
var people = ["Zain", "Haris", "Hamza", "Sana", "Ayeasha"];
// Function to print personalized messages
function personalizedmessages(names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        var message = "Hello, ".concat(name_1, "! This is a personalized message for you.");
        console.log(message);
    }
}
// Call the function with the array of people
personalizedmessages(people);
