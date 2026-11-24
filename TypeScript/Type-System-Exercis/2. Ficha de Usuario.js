"use strict";
// Create a function to receive the user object
function userCard(user) {
    // Display the user card information
    return `${user.name} tiene ${user.age} años y su cuenta esta ${user.accountState}`;
}
// Call the function with the user object
let userCardInfo = userCard({ name: "Damián", age: 21, accountState: "activa" });
// Display the user card information
console.log(userCardInfo);
