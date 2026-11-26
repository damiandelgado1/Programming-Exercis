// Create a function for receive the name person and optionally their title
function getNameTitle(name: string, title?: string): string {
        
    // Return the complete name with title
    return `${title} ${name}`;
}

// Call the function for enter name and title
let person: string = getNameTitle("Matias", "Dr.");

// Display the complete name with title
console.log(person);

// Call the function for enter one argument
person = getNameTitle("Matias");

// Display the argument
console.log(person);