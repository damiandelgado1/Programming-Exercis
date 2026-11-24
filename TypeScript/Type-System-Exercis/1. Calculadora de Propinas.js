"use strict";
// Create a function to receive the bill amount and the tip percentaje
function totalPayment(accountAmount, tipPercentaje) {
    // Calculate the total payment
    const totalPayment = accountAmount * (1 + tipPercentaje / 100);
    // Return the total payment
    return totalPayment;
}
// Call the function with the bill amount and tip percentaje
let payment = totalPayment(20, 15);
// Display the total payment in the console
console.log(`${payment.toFixed(2)}`);
