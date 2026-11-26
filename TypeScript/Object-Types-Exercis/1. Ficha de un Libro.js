"use strict";
// Create a function to receive that book
function bookCard(book) {
    // If the book has not any properly
    if (book.name === undefined || book.author === undefined || book.publishDate || book.availability) {
        // Display missing data
        console.log("Faltan datos en el Libro");
        // If the age book entered is a text
    }
    else if (typeof book.publishDate !== "number") {
        // Indicate the publish date must be a number type data
        console.log("La fecha de publicacion del libro debe serun tipo de dato numerico");
    }
    // Return a phrase to describe the book
    return `Libro: ${book.name}, Autor: ${book.author}, Año de Publciacion: ${book.publishDate} y Disponibilidad: ${book.availability} \n\nEs un recorrido completo por Python que va desde los conceptos basicos hasta tecnicas avanzadas, priorizando la practica y las buenas practicas de desarrollo`;
}
// Call the function to enter the book
let book = bookCard({ name: "Ultimate Python", author: "Nicolas Schurmann", publishDate: 2024, availability: "Disponible" });
// Check the reject book compiler that lacks some properties or if has the year was text
console.log(book);
