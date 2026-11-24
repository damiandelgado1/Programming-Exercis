// Create a object to represent a contact with name and phone, and the email may or may not be present
interface Contact {
    name: string,
    phone: number,
    email?: string
}

// Create a function to display contact data and includes the email alone exist
function displayContactData(contact: Contact) {

    // If the email that in contact data
    if (contact.email !== undefined) {

        // Display the contact data
        return `Nombre: ${contact.name}, Telefono: ${contact.phone} y Email: ${contact.email}`;
    
    // If the email not that in contact data
    } else {
        return `Nombre: ${contact.name} y Telefono: ${contact.phone}`;
    }
}

// Call the function to enter contact data
let contactData = displayContactData({name: "Benjamin", phone: 982285401});

// Display the contact
console.log(contactData);