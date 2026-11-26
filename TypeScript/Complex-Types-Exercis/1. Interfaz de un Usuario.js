"use strict";
// Create the multiple user
let user1 = { name: "Benjamin", email: "benjamin@gmail.com", age: 20 };
let user2 = { name: "Alan", email: "alan@gmail.com", age: 23 };
let user3 = { name: "Tomas", email: "tomas@gmail.com", age: 22 };
// Display the user enter to the interface
console.log(user1);
console.log(user2);
console.log(user3);
// Test to enter a user with missing properties or the wrong type
let user4 = { name: "Carlos", email: "carlos@gmail.com" };
// Display the interface with new user
console.log(user4);
// Test to enter a user with wrong type
let user5 = { name: "Mateo", email: "mateo@gmail.com", age: "19" };
// Display the interface with new user
console.log(user5);
// Create a function to receive a user
function getUser(user) {
    // Create a text summary
    const textSummary = `${user} es un desarrollador de software mid-level que trabaja en TechNova como desarrollador full stack, tiene 4 años de experiencia y su stack de tecnnologias es:
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
let user = getUser("Daniel");
// Display the summary text of the user
console.log(user);
