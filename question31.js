var users = ["Zain", "Haris", "Farhan", "Moiz", "Ali"];
// Check if the list of users is not empty
if (users.length > 0) {
    // If the list is not empty, perform the existing logic
    users.forEach(function (user, index) {
        console.log("User ".concat(index + 1, ": ").concat(user));
    });
}
else {
    // If the list is empty, print the message
    console.log("We need to find some users!");
}
// Remove all usernames from the array
users = [];
// Check if the list of users is not empty after removal
if (users.length > 0) {
    users.forEach(function (user, index) {
        console.log("User ".concat(index + 1, ": ").concat(user));
    });
}
else {
    console.log("We need to find some users!");
}
