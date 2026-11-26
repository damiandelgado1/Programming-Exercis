"use strict";
// Create a students list, each one with name and grade
let studentsList = [
    { name: "Benjamin", grade: 5.0 },
    { name: "Andres", grade: 3.9 },
    { name: "Francisco", grade: 5.4 }
];
// Create a function to return alone the approved students
function getApprovedStudents(students) {
    // Create a list to storage the approved students
    const approvedStudent = [];
    // Loop through the students list
    students.forEach(student => {
        // If the student has grade major to 4
        if (student.grade >= 4.0) {
            // Add the approved students in the approved students list
            approvedStudent.push(student.name);
            // Indicate the approved student
            console.log(`Los estudiantes que aprobaron son: ${student.name}`);
            // If the student has grade minor to 4
        }
        else {
            // Indicate the repproved student
            console.log(`Los estudiantes que reprobaron son: ${student.name}`);
        }
    });
    // Return the approved students list
    return approvedStudent;
}
// Create a function to return the student with most high grade
function getBestStudent(students) {
    // If nothing students
    if (students.length === 0) {
        return null;
    }
    // Create a variable to storage the student with most high grade
    let bestStudent = students[0];
    // Loop through the students list
    students.forEach(student => {
        // Obtain the student with most high grade
        if (student.grade > bestStudent.grade) {
            // Save the student with most high grade
            bestStudent = student;
            // Display the student with most high grade    
            console.log(`El estudiante con la nota mas alta es: ${bestStudent.name}`);
            // If there not student with most high grade
        }
        else {
            // Indicate that not there a student with most high grade
            console.log(`No hay un estudiante con la nota mas alta`);
        }
    });
    return bestStudent;
}
// Call the function to display the approved students
let approvedStudentsList = getApprovedStudents(studentsList);
// Display the list of approved students
console.log(approvedStudentsList);
// Call the function to display the student highest grade
let bestStudent = getBestStudent(studentsList);
// Display the student highest grade
console.log(bestStudent);
// Test to create a new student
const newStudent = { name: "Juan", grade: 4.5 };
// Add the new student in the students list
studentsList.push(newStudent);
// Display the list of students with the new student add
console.log(studentsList);
// Call the function again to display the approved students
let approvedStudents = getApprovedStudents(studentsList);
// Display the list of approved students
console.log(approvedStudents);
// Test to enter a new student with incomplete data
const studentIncompleteData = { name: "Andres" };
// Add the new student with incomplete data to list approved student
studentsList.push(studentIncompleteData);
// Display the list of approved students with the new student incomplete data
console.log(studentsList);
