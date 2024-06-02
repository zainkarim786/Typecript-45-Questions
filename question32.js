// Make a list of current users
var current_users = ["Zain Karim", "Haris", "Farhan", "Moiz", "Anas"];
// Make another list of new users
var new_users = ["Sobia", "Haris", "bushra", "Ayesha", "Lubaina"];
var _loop_1 = function (newUser) {
    // Check if the new username already exists in the current users list (case-insensitive)
    var usernameExists = current_users.some((function (user) { return user.toLowerCase() === newUser.toLowerCase(); }));
    // Print the appropriate message
    if (usernameExists) {
        console.log("Username \"".concat(newUser, "\" is not unique. Please choose a different username."));
    }
    else {
        console.log("Username \"".concat(newUser, "\" is available. You can use it."));
        // Add the new username to the current users list if you want
        current_users.push(newUser);
    }
};
// Loop through the new users list
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var newUser = new_users_1[_i];
    _loop_1(newUser);
}
