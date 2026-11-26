"use strict";
// Create a arrow function for receive the rectangle width and height
const getAreaRectangle = (width, height) => {
    // Calculate the rectangle area
    const area = width * height;
    // Return the rectangle area
    return area;
};
// Call function to enter the rectangle width and height and save in constant
let areaRectangle = getAreaRectangle(8, 5);
// Display the rectangle area
console.log(areaRectangle);
// Create a arrow function for receive a integer number
const getNumberParImpar = (number) => {
    // If the received number is par
    if (number % 2 === 0) {
        // Indicate the number enter is par
        console.log("El numero es par");
        // Return the par number
        return number;
        // If the received number is impar
    }
    else {
        // Indicate the number enter is impar
        console.log("El numero es impar");
        // Return the impar number
        return number;
    }
};
// Call function to enter number
let numberParImpar = getNumberParImpar(2);
// Display the number
console.log(numberParImpar);
// Test enter another type argument for calculate rectangle area
areaRectangle = getAreaRectangle("12", "5");
// Display the compiler behavior in the function to calculare rectangle area
console.log(areaRectangle);
// Test enter another type argument for check if a number is par or impar
numberParImpar = getNumberParImpar("5");
// Display the compiler behavior in the function to check if a number is par or impar
console.log(numberParImpar);
