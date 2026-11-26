// Create a function for receive a number
function getNumbersList(number: number): number[] {
    
    // Create a list of numbers
    const numberList: number[] = [];
    
    // Loop through the numbers from 1 to n
    for (let i: number = 1; i <= number; i++) {

        // Add the number in the list of numbers
        numberList.push(i);
    }

    // Return the numbers list from 1 to n
    return numberList;
}

// Create a function for receive a list of text
function getTextLengthsList(texts: string[]): string[] {
    
    // Create a list to storage the texts lengths
    const textLengthsList: string[] = [];

    // Loop through the text in the list of lengths text
    for (let text of texts) {

        // Obtain the lenght of each text
        const textLength = String(text.length);

        // Save the text length in the list of text lengths
        textLengthsList.push(textLength);
    };

    // Return the list of text lengths
    return textLengthsList;
}

// Create a list of texts
let textList: string[] = [
    "desarrollador frontend",
    "desarrollador backend",
    "desarrollador full stack"
];

// Call the function to enter a number
let numberList: number[] = getNumbersList(10);

// Display the list of number from 1 to n
console.log(numberList);

// Call the function to enter a list of texts
let textLengthsList: string[] = getTextLengthsList(textList);

// Display the list of text lengths
console.log(textLengthsList);

// Check the element type of the list of number
console.log(typeof numberList);

// Check the element type of the list of text lengths
console.log(typeof textLengthsList);