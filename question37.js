// Function to create a T-shirt with default values
function Make_Shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, "-sized T-shirt with the message: \"").concat(message, "\""));
}
// Creating a large shirt with default message
Make_Shirt();
// Creating a medium shirt with default message
Make_Shirt("Medium");
// Creating a small shirt with a different message
Make_Shirt("Small", "TypeScript is awesome!");
