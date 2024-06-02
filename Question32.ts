// Make a list of current users
let current_users: string[] = ["Zain Karim", "Haris", "Farhan", "Moiz", "Anas"];

// Make another list of new users
let new_users: string[] = ["Sobia", "Haris", "bushra", "Ayesha", "Lubaina"];

// Loop through the new users list
for (let newUser of new_users) {
    // Check if the new username already exists in the current users list (case-insensitive)
    let usernameExists = current_users.some((user => user.toLowerCase() === newUser.toLowerCase()));

    // Print the appropriate message
    if (usernameExists) {
        console.log(`Username "${newUser}" is not unique. Please choose a different username.`);
    } else {
        console.log(`Username "${newUser}" is available. You can use it.`);
        // Add the new username to the current users list if you want
        current_users.push(newUser);
    }
}