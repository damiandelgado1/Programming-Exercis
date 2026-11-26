// Create a object with the student data
interface Students {
    name: string,
    grade: number
}

// Create a students list, each one with name and grade
let studentsList: Students[] = [
    { name: "Benjamin", grade: 5.0 },
    { name: "Andres", grade: 3.9 },
    { name: "Francisco", grade: 5.4 }
]

// Create a function to return alone the approved students
function getApprovedStudents(students: Students[]) {

    // Loop through the students list
    students.forEach(student => {
        
        // If the student has grade major to 4
        if (student.grade >= 4.0) {

            // Indicate the approved student
            console.log(`Los estudiantes que aprobaron son: ${student.name}`);
            
        // If the student has grade minor to 4
        } else {

            // Indicate the repproved student
            console.log(`Los estudiantes que reprobaron son: ${student.name}`);
        }
    });
}

// Create a function to return the student with most high grade
function getBestStudent(students: Students[]) {
    
    // Create a variable to storage the student with most high grade
    let bestStudent = studentsList[0];

    // Loop through the students list
    students.forEach(student => {
        
        // Obtain the student with most high grade
        if (student.grade > bestStudent.grade) {
            
            // Save the student with most high grade
            bestStudent = student;

            // Display the student with most high grade    
            console.log(`El estudiante con la nota mas alta es: ${bestStudent.name}`);
        
        // If there not student with most high grade
        } else {

            // Indicate that not there a student with most high grade
            console.log(`No hay un estudiante con la nota mas alta`);
        }
    });
}

// Call the function to display the approved students
let approvedStudentsList = getApprovedStudents(studentsList);

// Call the function to display the student highest grade
let bestStudent = getBestStudent(studentsList);

// Test to create a new student
const newStudent: Students = { name: "Juan", grade: 4.5 };

// Add the new student in the students list
studentsList.push(newStudent);

// Call the function again to display the approved students
let approvedStudents = getApprovedStudents(studentsList);