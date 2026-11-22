// Create an object that represents a user with their name, age, and account status
interface User {
    name: string,
    year: number,
    accountState: string
}

// Create a function to receive the user object
function userCard(user: User) {

    // Display the user card information
    return `${user.name} tiene ${user.year} años y su cuenta esta ${user.accountState}`;
}

// Call the function with the user object
let userCardInfo = userCard({name: "Damián", year: 21, accountState: "activa"});

// Display the user card information
console.log(userCardInfo);