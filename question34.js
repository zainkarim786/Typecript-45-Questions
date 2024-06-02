// Store three favorite pizza names in an array
var pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
// Use a for loop to print the name of each pizza
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log(pizza);
}
console.log("\n");
// Modify the for loop to print a sentence using the name of the pizza
for (var _a = 0, pizzas_2 = pizzas; _a < pizzas_2.length; _a++) {
    var pizza = pizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("\n");
// Add a line at the end to state how much you like pizza
console.log("I really love pizza!");
