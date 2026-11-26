"use strict";
// Create a function to calculate final price of the product apply IVA
function getFinalPrice(price, iva = 0.21) {
    // Calculate the final price with IVA
    const finalPriceWithIVA = price * (1 + iva);
    // Return the final price without IVA
    return finalPriceWithIVA;
}
// Call the function to enter another IVA
let finalPrice = getFinalPrice(200, 0.10);
// Display the final price of the product with IVA
console.log(finalPrice.toFixed(2));
// Call the function to display final price without IVA
finalPrice = getFinalPrice(200);
// Display the final price without IVA
console.log(finalPrice);
// Test enter a IVA value with another type
finalPrice = getFinalPrice(200, "0.30");
// Display the final price with IVA another type
console.log(finalPrice);
