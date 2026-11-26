// Define a interface to describe a the user with name, email and age
interface User {
    name: string,
    email: string,
    age: number
}

// Create the multiple user
let user1: User = { name: "Benjamin", email: "benjamin@gmail.com", age: 20 };
let user2: User = { name: "Alan", email: "alan@gmail.com", age: 23 };
let user3: User = { name: "Tomas", email: "tomas@gmail.com", age: 22 };

// Display the user enter to the interface
console.log(user1);
console.log(user2);
console.log(user3);

// Test to enter a user with missing properties
let user4: User = { name: "Carlos", email: "carlos@gmail.com" };

// Display the interface with new user
console.log(user4);

// Test to enter a user with wrong type
let user5: User = { name: "Mateo", email: "mateo@gmail.com", age: "19" };

// Display the interface with new user
console.log(user5);

// Create a function to receive a user
function getUser(user: string): string {

    // Create a text summary
    const textSummary: string = `${user} es un desarrollador de software mid-level que trabaja en TechNova como desarrollador full stack, tiene 4 años de experiencia y su stack de tecnnologias es:
    Frontend: React.js
    Backend: Django
    Base de Datos: MySQL y PostgreSQL
    Herramientas de Desarrollo: Git, GitHub, Docker y Postman
    Herramientas de Inteligencia Artificial: ChatGPT y Claude
    `;

    // Return a text summary
    return textSummary;
}

// Call the function to enter a user
let user: string = getUser("Daniel");

// Display the summary text of the user
console.log(user);