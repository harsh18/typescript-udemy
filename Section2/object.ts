//Object
let Max = {
    name: 'a',
    age: 23
}

//Max = {}; //Error
Max = {
    name: 'b',
    age: 23
};

//Complex Object structure
let salaryData: {data:number[], getSalariesData: () => number[]} = {
    data : [2,3,4,5],
    getSalariesData: () => this.data
}

console.log(salaryData);

//Type alias to reuse the type checking in typescript
//Repetition same as above
let ionEmployeeSalaryData: {data:number[], getSalariesData: () => number[]} = {
    data : [2,3,4,],
    getSalariesData: () => this.data
}

//Create alias: and reuse it any where from here on.
type salaryTypeAlias = { data: number[], getSalariesData: ()=>number[]};
let ionGroupEmployeeSalaryData: salaryTypeAlias = {
    data : [2,3,4,],
    getSalariesData: () => this.data
}

//Now We create type union for integer and string
var accountNumber:string | number;//possible values '2323211' | 2323211

accountNumber = 2323211;
accountNumber = '2323211';
//accountNumber = false; //error;

