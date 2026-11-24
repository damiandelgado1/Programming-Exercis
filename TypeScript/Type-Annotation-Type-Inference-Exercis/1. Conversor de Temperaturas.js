"use strict";
// Create a function to receive a temperature in celsius degrees
function convertTemperature(celsius) {
    // Calculate the fahrenheit grades
    const fahrenheit = (celsius * 9 / 5) + 32;
    // Return the equivalent in fahrenheit
    return `El equivalente de la Temperatura en Grados Celsius a Grados Fahrenheit es: ${fahrenheit}`;
}
// Call the function to pass temperature and save result in the constant
let temperatureFahrenheit = convertTemperature(28);
// Display the temperature in fahrenheit degrees
console.log(temperatureFahrenheit);
