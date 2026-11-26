"use strict";
// Create a function for receive the name person and optionally their title
function getNameTitle(name, title) {
    // Return the complete name with title
    return `${title} ${name}`;
}
// Call the function for enter name and title
let person = getNameTitle("Matias", "Dr.");
// Display the complete name with title
console.log(person);
// Call the function for enter one argument
person = getNameTitle("Matias");
// Display the argument
console.log(person);
