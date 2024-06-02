var guestes = ["Zain", "Nadeem", "Aftab"];
// Function to generate invitation messages
function generateInvitationMessage(guest) {
    return "Dear ".concat(guest, ", you are invited to dinner.");
}
// Inform people about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Add a new guest to the beginning of the array
guestes.unshift("Zain");
// Add a new guest to the middle of the array
var MiddleIndex = Math.floor(guestes.length / 2);
guestes.splice(MiddleIndex, 0, "Nadeem");
// Use push() to add a new guest to the end of the array
guestes.push("Aftab");
// Print a new set of invitation messages
for (var _i = 0, guestes_1 = guestes; _i < guestes_1.length; _i++) {
    var guest = guestes_1[_i];
    var invitationMessage = generateInvitationMessage(guest);
    console.log(invitationMessage);
}
// Print a message that only two people can be invited
console.log("\nOops! The dinner table won't arrive in time, and we can only invite two people.");
// Remove guestes one at a time until only two names remain
while (guestes.length > 2) {
    var removedguests = guestes.pop();
    console.log("Sorry, ".concat(removedguests, ", we can't invite you to dinner."));
}
// Print a message to each of the two people still on your list
for (var _a = 0, guestes_2 = guestes; _a < guestes_2.length; _a++) {
    var remainingGuest = guestes_2[_a];
    console.log("You're still invited, ".concat(remainingGuest, "!"));
}
// Remove the last two names from your list
guestes.pop();
guestes.pop();
// Print the final list to ensure it's empty
console.log("\nFinal Guest List:", guestes);
