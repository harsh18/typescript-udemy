class Person{
    name: string;
    public age: number;
    private salary: number;
    protected address: string;

    constructor(
        name: string,
        public phoneNumber: number,
        age: number){
        this.name = name;
        this.age = age;
    }

    public getName():string{
        return this.name;
    }

    setSalary(salary: number):void{
        this.salary = salary;
    }
}

const harsh = new Person(
    'Harsh',
    9711409299,
    23
);
console.log(harsh);
harsh.setSalary(10000000);
console.log(harsh.getName());

//Access private property - Parsing error
//console.log(harsh.salary);


//Max Class inherited from Person class
class Alpha extends Person{
    name='Alpha'
}

const alpha = new Alpha('Max', 9871452145, 25);
console.log(alpha.name);


//Inheritance and using constructor function
class Beta extends Person{
    constructor(age: number, phoneNumber: number){
        super('Beta',age, phoneNumber);
    }
}

const betaUser = new Beta(25, 9856324545);
console.log(betaUser);


//Now access protected Property in child class
class Gamma extends Person{
    constructor(){
        super('Gamma', 25, 9856324456);
    }

    setAddress(address: string){
        this.address = address;
    }
}
const gammaUser = new Gamma();
gammaUser.setAddress('Delhi');
console.log(gammaUser);


//Setter and Getter 
class Sez{
    private _sezName:string;

    set sezName(name:string){
        this._sezName = name;
    }

    get sezName(): string{
        return `Welcome to ${this._sezName}`;
    }
}

const candor = new Sez();
candor.sezName = 'Candor';
console.log(candor.sezName);

