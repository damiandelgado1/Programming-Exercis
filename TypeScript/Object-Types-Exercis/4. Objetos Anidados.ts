// Create a object to represent a person with their name and address, and the address contain street, city and postal code
interface Person {
    name: string,
    address: {
        street: string,
        city: string,
        postalCode: string
    };
}

// Create a function to receive a person
function personAddress(person: Person) {
    
    // Return the complete address in one line
    return `La direccion completa de ${person.name} es: Calle ${person.address.street}, ${person.address.city}, ${person.address.postalCode}`;
}

// Call the function to enter a person name
let person = personAddress({name: "Oliver Brown", address: { street: "27 Greenfield Road", city: "Manchester", postalCode: "M146AB"}, });

// Display the address person
console.log(person);