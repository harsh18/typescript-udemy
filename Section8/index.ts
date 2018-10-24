import './exercise';

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

//Generic TYpes - function
const sayHello2:<T>(data:T) => void = sayHelloGeneric;
sayHello2<string>('Generic type check for function');

//Generic classes

class Sum<T extends string | number>{
    param1:T;
    param2:T;
    result(){
        return (+this.param1) + (+this.param2);
    }
}

const vegetablePrice = new Sum<number>();
vegetablePrice.param1 = 2;
vegetablePrice.param2 = 3;
console.log(vegetablePrice.result());

const vegetablePrice1 = new Sum<string>();
vegetablePrice1.param1 = "2";
vegetablePrice1.param2 = "3";
console.log(vegetablePrice1.result());

const vegetablePrice2 = new Sum<string | number>();
vegetablePrice2.param1 = "2";
vegetablePrice2.param2 = 3;
console.log(vegetablePrice2.result());

//With multiple generic type in class
//Extending T with number or string,
//here we are constraining type check with number or string
class Multiply<T extends number, U extends string>{
    param1: T;
    param2: U;

    result(){
        return +this.param1 * +this.param2;
    }
}

const daysWithYear = new Multiply<number, string>();
daysWithYear.param1 = 2;
daysWithYear.param2 = "1989";
console.log(daysWithYear.result());