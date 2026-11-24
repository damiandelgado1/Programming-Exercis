// Create a function that receives the product price and discount percentage
function calculateFinalPrice(productPrice: number, discountPercentage: number) {
    
        // Calculate the final price
        const finalPriceProduct: number = productPrice - discountPercentage;

        // Return the final price
        return `El precio final del Producto es: ${finalPriceProduct}`;
}    

// The percentage has a default value of 10%
let percentage: number = 0.10;

// Call the function with and without the second argument
let finalPrice = calculateFinalPrice(2000, percentage);

let finalPriceWithoutSecondParameter = calculateFinalPrice(2000);

// Check whether the compiler rejects calls with a string instead of a number
console.log(finalPrice);
console.log(finalPriceWithoutSecondParameter);