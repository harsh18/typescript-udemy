//####functions

function getAge(age:number):number{
    return age;
}
console.log(getAge(2));

let a=2;
let b:any=2;
function multiplication():number{
    return a*b;
}
console.log(multiplication());

b='asd';
console.log(multiplication());

//Function types
function getAgeFromName(name: string): number{
    return 2;
}

function sayHello(): void{
    console.log('Hello!');
}

let myAge: (val: string) => number;

//myAge = sayHello; //Throw error

myAge = getAgeFromName; 

//never return anything
function throwError(): never{
    throw new Error('Test Error throw');
}
