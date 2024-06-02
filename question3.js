var Name = "Zain Karim";
var uppercaseName = Name.toUpperCase();
var lowercaseName = Name.toLowerCase();
var titlecaseName = Name.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log(uppercaseName);
console.log(lowercaseName);
console.log(titlecaseName);
