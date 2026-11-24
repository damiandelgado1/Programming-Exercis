"use strict";
// Create a list with the names of pending three tasks
let tasksList = ["Implementar Pagina de Inicio de Sesion", "Añadir validacion de Roles de los Usuarios", "Optimizar Consultas de Bases de Datos"];
// Add a fourth task
tasksList.push("Añadir Definicion de Tipos para responder a una API");
// Loop through the list show each one in upper case
tasksList.forEach(task => {
    // Check the editor offer the properly functions of the texts and reject add a number to the list
    console.log(`Comprobando el uso para mostrar el Nro. de Tareas en la Lista de Tareas: ${task.length}`);
    console.log(`Comprobando el uso para mostrar todas las Palabras de las Tareas en la Lista de Tareas en Mayuscula: ${task.toUpperCase()}`);
    console.log(`Comprobando el uso para mostrar todas las Palabras de las Tareas en la Lista de Tareas en Minuscula: ${task.toLowerCase()}`);
    const addNumber = 10;
    tasksList.push(addNumber);
    console.log(tasksList);
});
