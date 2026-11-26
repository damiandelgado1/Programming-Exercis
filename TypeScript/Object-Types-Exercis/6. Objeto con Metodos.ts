// Create a object to represent bank account
interface BankAccount {
    money: number;

    enterMoney(amount: number): number;
    removeMoney(amount: number): number;
}

// Create a object to enter money and remove money
const bankAccount: BankAccount = {
    money: 20,

    // Create a method to enter money
    enterMoney(amount: number): number {
        this.money += amount;
        console.log(`Se ingresaron $${amount} a la cuenta del banco. El dinero actual es: $${this.money}`);

        return this.money;
    },
    
    // Create a method to remove money
    removeMoney(amount: number): number {
        this.money -= amount;
        console.log(`Se retiraron $${amount} de la cuenta del banco. El dinero actual es: $${this.money}`);

        return this.money;
    }
}

// Use the method to enter money in the bank account
let enterMoney: number = bankAccount.enterMoney(50);

// Display the enter money and current money in the bank account
console.log(enterMoney);

// Use the method to remove money in the bank account
let removeMoney = bankAccount.removeMoney(20);

// Display the remove money and current money in the bank account
console.log(removeMoney);