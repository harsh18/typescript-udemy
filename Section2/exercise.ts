//Exercise to utilize typescript types
// let bankAccount = {
//     money: 2000,
//     deposit(value){
//         this.money += value;
//     }
// }

// let myself = {
//     name: 'Max',
//     bankAccount: bankAccount,
//     hobbies: ['sports', 'cooking']
// }

// myself.bankAccount.deposit(3000);

// console.log(myself);

type BankAccount = {
    money: number,
    deposit: (value: number) => void;
}

type Myself = {
    name: string,
    bankAccount: BankAccount,
    hobbies: string[]
}

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value){
        this.money += value;
    }
}

let myself:Myself = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ['sports', 'cooking']
}

myself.bankAccount.deposit(3000);

console.log('Exercise', myself);