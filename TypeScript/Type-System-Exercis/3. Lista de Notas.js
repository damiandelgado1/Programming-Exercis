"use strict";
// Create a function to receive the notes list
function calculateAverageGrade(notesList) {
    // If the notes list was empty
    if (Object.keys(notesList).length === 0) {
        // Return zero
        return `La Nota Media es: 0.00`;
        // If the notes list was not empty
    }
    else {
        // Calculate the average grade of the notes in the subjects
        const averageGrade = (notesList.desarrolloFrontend + notesList.desarrolloBackend + notesList.desarrolloFullStack) / 3;
        // Return the average grade
        return `La Nota Media es: ${averageGrade.toFixed(1)}`;
    }
}
// Call the function and enter the student's grades
let averageGrade = calculateAverageGrade({ desarrolloFrontend: 6.5, desarrolloBackend: 6.0, desarrolloFullStack: 6.2 });
// Display the average grade of the student
console.log(averageGrade);
