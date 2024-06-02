// Function to create a sandwich summary
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary");
    if (items.length === 0) {
        console.log("No items specified for the Sandwich");
    }
    else {
        console.log("Items:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- ".concat(item));
        }
        console.log("Enjoy Your Sandwich :");
    }
    console.log("\n");
}
// Calling the function with different numbers of arguments
order_sandwich("Bread", "Cheese", "Tomato", "Lettuce");
order_sandwich("Chicken", "Mayonnaise", "Pickles");
order_sandwich(); // No items specified
