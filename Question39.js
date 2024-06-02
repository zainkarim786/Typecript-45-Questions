// Function to format city and country
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Calling the function with three city-country pairs
var result1 = city_country("Karachi", "Pakistan");
var result2 = city_country("Istanbul", "Turkey");
var result3 = city_country("New York", "USA");
// Printing the returned values
console.log(result1);
console.log(result2);
console.log(result3);
