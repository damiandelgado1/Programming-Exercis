"use strict";
// Create a function to recevie the worker name of the company
function getCompany(company) {
    // Create a list to save worker name
    const workersName = [];
    // Loop through the name each worker in the list of worker
    company.workerList.forEach(worker => {
        // Add the workers in the list of workers name
        workersName.push(worker.name);
    });
    // Return all the workers name
    return workersName;
}
// Create a list with the worker name of the company
let workerList = [
    { name: "Sarah Johnson", email: "sarahjohnson@gmail.com", role: "Diseñadora de UI y UX" },
    { name: "Michael Chen", email: "michaelchen@gmail.com", role: "Ingeniero de Software" },
    { name: "David Wilson", email: "davidwilson@gmail.com", role: "Arquitecto de Soluciones Cloud" }
];
// Call the function to enter company with address information and the workers
let company = { name: "Microsoft", address: { street: "One Microsoft Way", city: "Redmond", country: "United States" }, workerList: workerList };
// Display the company information
console.log(company);
// Call the function to enter company information
let workerNameCompany = getCompany(company);
// Display the worker name of the company
console.log(workerNameCompany);
