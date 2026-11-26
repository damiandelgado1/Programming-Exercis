// Create a function for receive the rectangle width and height
function getAreaRectangle(width: number, height: number): number {

    // Calculate the area of rectangle
    const area: number = width * height;

    // Return the rectangle area
    return area;
}

// Call the function to enter the width and height values
let rectangleArea: number = getAreaRectangle(8, 5);

// Display the area obtain
console.log(rectangleArea);

// Test enter string values
rectangleArea = getAreaRectangle("8", "5");

// Display the function with string values
console.log(rectangleArea);

// Test enter alone one value
rectangleArea = getAreaRectangle(8);

// Display the function with one value
console.log(rectangleArea);