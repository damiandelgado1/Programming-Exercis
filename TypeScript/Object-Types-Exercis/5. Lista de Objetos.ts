// Create a students list, each one with name and grade
let studentsList = [
    {"name": "Mateo", "grade": "6.8"},
    {"name": "Alejandro", "grade": "5.8"},
    {"name": "Benjamin", "grade": "5.5"},
    {"name": "Pedro", "grade": "6.0"},
    {"name": "Roberto", "grade": "6.2"}
];

// Create a function to return alone the approved students
function approvedStudents(students: string[]) {
    
    // Create a list with all approved students
    const approvedStudents: string[] = [];

    // Create a list with all reproved students
    const repprovedStudents: string[] = [];

    // Loop through the students list
    students.forEach(student => {
        
        // If the student has grade major to 4
        if (student[0] >= "4.0") {
            
            // Add the approved student to the approved students list
            approvedStudents.push(student);

            // Indicate the approved student
            console.log(`Los estudiantes que aprobaron son: ${approvedStudents}`);
        
        // If the student has grade minor to 4
        } else {

            // Add the repproved student to the repproved students list
            repprovedStudents.push(student);

            // Indicate the repproved student
            console.log(`Los estudiantes que reprobaron son: ${repprovedStudents}`);
        }
    });
}

// Create a function to return the student with most high grade

    // Obtain the student with most high grade

    // Display the student with most high grade    

// Call the function to enter students with their grade's

// Display the approved students

// Call the function to enter the student with most high grade

// Display the student with most high grade
