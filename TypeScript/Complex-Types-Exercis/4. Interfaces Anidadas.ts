// Create a interface to address
interface Address {
    street: string,
    city: string,
    country: string
}

// Create a interface to storage worker information
interface Workers {
    name: string,
    email: string,
    role: string
}

// Create a interface to company for include the address and worker interface
interface Company {
    name: string,
    address: Address,
    workerList: Workers[]
}

// Create a function to recevie the worker name of the company
function getCompany(company: Company): string[] {

    // Create a list to save worker name
    const workersName: string[] = [];

    // Loop through the name each worker in the list of worker
    company.workerList.forEach(worker => {
        
        // Add the workers in the list of workers name
        workersName.push(worker.name);

    });

    // Return all the workers name
    return workersName;
}

// Create a list with the worker name of the company
let workerList: Workers[] = [
    { name: "Sarah Johnson", email: "sarahjohnson@gmail.com", role: "Diseñadora de UI y UX" },
    { name: "Michael Chen", email: "michaelchen@gmail.com", role: "Ingeniero de Software" },
    { name: "David Wilson", email: "davidwilson@gmail.com", role: "Arquitecto de Soluciones Cloud" }
];

// Call the function to enter company with address information and the workers
let company: Company = { name: "Microsoft", address: { street: "One Microsoft Way", city: "Redmond", country: "United States" }, workerList: workerList } ;

// Display the company information
console.log(company);

// Call the function to enter company information
let workerNameCompany: string[] = getCompany(company);

// Display the worker name of the company
console.log(workerNameCompany);