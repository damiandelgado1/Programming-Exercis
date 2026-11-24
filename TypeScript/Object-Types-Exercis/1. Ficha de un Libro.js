"use strict";
// Create a function to receive that book
function describeBook(book) {
    // Return a phrase to describe the book
    return `Libro: ${book.name}, Autor: ${book.author}, Año de Publciacion: ${book.publishDate} y Disponibilidad: ${book.availability} \n\nEs un recorrido completo por Python que va desde los conceptos basicos hasta tecnicas avanzadas, priorizando la practica y las buenas practicas de desarrollo`;
}
// Call the function to enter the book
let bookCard = { name: "Ultimate Python", author: "Nicolas Schurmann", publishDate: 2024, availability: "Disponible" };
let book = describeBook(bookCard);
// Check the reject book compiler that lacks some properties or if has the year was text
console.log(book);
