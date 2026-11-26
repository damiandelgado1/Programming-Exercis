"use strict";
// Create a object to enter money and remove money
const bankAccount = {
    money: 20,
    // Create a method to enter money
    enterMoney(amount) {
        this.money += amount;
        console.log(`Se ingresaron $${amount} a la cuenta del banco. El dinero actual es: $${this.money}`);
        return this.money;
    },
    // Create a method to remove money
    removeMoney(amount) {
        this.money -= amount;
        console.log(`Se retiraron $${amount} de la cuenta del banco. El dinero actual es: $${this.money}`);
        return this.money;
    }
};
// Use the method to enter money in bank account
let enterMoney = bankAccount.enterMoney(50);
// Display the enter money and current money in the bank account
console.log(enterMoney);
// Use the method to remove money in bank account
let removeMoney = bankAccount.removeMoney(20);
// Display the remove money and current money in the bank account
console.log(removeMoney);
