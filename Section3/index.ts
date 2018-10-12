//ES6
//LEt, const - block scope
//functions with defult params
function displayName(name:string = 'Harsh'){
    console.log(name);
}

displayName();

//REST and Spread operators
const maxList = [1,2,3];
console.log(Math.max(...maxList));

function displayListOfAges(...ages: number[]){
    console.log(ages);
}

displayListOfAges(1,2,2);

//Destructuring Array
let salaryList = [20000, 15000, 30000];
let [employeeA, employeeB, employeeC] = salaryList;

console.log(employeeA, employeeB, employeeC);

//Complex Array
let employees = [
    ['A', 28, 20000],
    ['B', 26, 30000]
];

let [[employeeAName, employeeAAge], [employeeBName, employeeBAge]] = employees;

console.log('employeeA - ', employeeAName, employeeAAge);
console.log('employeeB - ', employeeBName, employeeBAge);

//Destructuring Objects

let employee = {
    name: 'harsh',
    age: 28,
    salaryComponent: {
        mealCoupon: 1,
        pension: 2
    }
};

let {
    name: EmployeeName,
    age: EmployeeAge,
    salaryComponent: {
        mealCoupon: mealContri,
        pension: pensionContri
    }
} = employee;

console.log('Employee Details from object', EmployeeName, EmployeeAge, mealContri, pensionContri);

//Template literal

let carModel: string = 'creta';

console.log(`Hyundai- ${carModel}`);

//Symbol - guratee unique name, Iterators, Generators

//Exercise:
//1.

const double = (value: number):number => value * 2;

//2.
const greet = (name: string):void => {
    if (name === 'undefined') { name = 'Max';}

    console.log(`Hello ${name}`);
}
greet('undefined');

//3. 
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

//4.
const newArray = [55, 89];
//Array.prototype.push.call(newArray, ...numbers);
newArray.push(...numbers);

console.log(newArray);

//5.
const testResults = [3.89, 2.99, 1.38];

const [result1, result2, result3] =  testResults;

//6
const scientist = {
    firstName: 'Will',
    experience: 12
};

const { 
    firstName,
    experience
} = scientist;