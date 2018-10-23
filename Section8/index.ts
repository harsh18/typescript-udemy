//Function without Generic Type checking
function hello(name: string){
    console.log(name);
}

//if we dont know the type of name
function helloAll(name: any){
    console.log(name);
}

//Generic Types
function sayHelloGeneric<T>(name: T){
    console.log(name);
}

hello('I am without any check');
helloAll('I am with any check');
sayHelloGeneric('I am Generically checked typed function');

//Array check
const VehicleCompanies:string[] = ['Maruti', 'yamaha'];
//Generic Array check
const vehicleCompaniesGeneric:Array<string> = ['BMW', 'mercedies'];

function printAll<T>(args: T[]){
    args.forEach((item)=>{
        console.log(item);
    });
}

printAll(vehicleCompaniesGeneric);
printAll<string>(['NASA']);