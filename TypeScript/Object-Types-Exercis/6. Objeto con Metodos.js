"use strict";
// Create a object to enter money and remove money
const bankAccount = {
    money: 20,
    // Create a method to enter money
    enterMoney() {
        const enterMoney = bankAccount.money += 30;
        console.log(`Se ingresaron $30 a la cuenta del banco. El dinero actual es: ${enterMoney}`);
    },
    // Create a method to remove money
    removeMoney() {
        const removeMoney = bankAccount.money -= 10;
        console.log(`Se retiraron $10 de la cuenta del banco. El dinero actual es: ${removeMoney}`);
    }
};
// Use the method of the object
bankAccount.enterMoney();
bankAccount.removeMoney();
