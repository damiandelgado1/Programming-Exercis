"use strict";
// Create a function for receive a number
function getNumbersList(number) {
    // Create a numbers list
    const numberList = [];
    // Loop through the numbers from 1 to n
    for (let i = 1; i <= number; i++) {
        // Add the number in the numbers list
        numberList.push(i);
    }
    // Return the numbers list from 1 to n
    return numberList;
}
// Create a function for receive a texts list
function getTextLengthsList(texts) {
    // Create a list to storage the texts lengths
    const textLengthsList = [];
    // Loop through the text in the texts list
    for (let text of texts) {
        // Obtain the lenght of the each text
        const textLength = String(text.length);
        // Save the upper case text to the list
        textLengthsList.push(textLength);
    }
    ;
    // Return the upper case texts list
    return textLengthsList;
}
// Create a texts list
let textList = [
    "desarrollador frontend",
    "desarrollador backend",
    "desarrollador full stack"
];
// Call the function to enter a number
let numbersList = getNumbersList(10);
// Display the numbers list from 1 to n
console.log(numbersList);
// Call the function to enter a text list
let textLengthList = getTextLengthsList(textList);
// Display the list of text lengths
console.log(textLengthList);
// Check the element type of the number list
console.log(typeof numbersList);
// Check the element type of the list of text lengths
console.log(typeof textLengthList);
