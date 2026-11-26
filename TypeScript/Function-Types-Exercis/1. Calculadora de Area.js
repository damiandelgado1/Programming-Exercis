"use strict";
// Create a function for receive the rectangle width and height
function calculateArea(width, height) {
    // Calculate the area of rectangle
    const area = width * height;
    // Return the rectangle area
    return area;
}
// Call the function to enter the width and height values
let rectangleArea = calculateArea(8, 5);
// Display the area obtain
console.log(rectangleArea);
// Test enter string values
rectangleArea = calculateArea("8", "5");
// Display the function with string values
console.log(rectangleArea);
// Test enter alone one value
rectangleArea = calculateArea(8);
// Display the function with
console.log(rectangleArea);
