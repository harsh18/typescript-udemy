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

//Static Properties and methods in Class
class Helpers{
    static pi = 3.14;

    static circumference(radius: number):number{
        return Helpers.pi * radius;
    }
}

console.log(`Pi value - ${Helpers.pi}`);
console.log(`Circumference of a circle - ${Helpers.circumference(2)}`);

//Abstract Class
abstract class Javascript{
    libraryName: string;

    //This is a abstract method which should be implemented
    //whichever class will inherit javascript class
    abstract changeLibraryName(name: string):void;

    ecmaScriptVersion(): number{
        return 6
    }
}

class Reactjs extends Javascript{
    libName: string = 'React js';
    changeLibraryName(name: string): void{
        this.libName = name;
    }
}

const reactJs_16 = new Reactjs();

console.log(reactJs_16.libName);
reactJs_16.changeLibraryName('Fiber');
console.log(reactJs_16.libName);

//Private Constructor and Singleton and readonly property
class OnlyOne{
    private static instance: OnlyOne;
    public readonly numberOfInstance: number;

    private constructor(public name: string){}

    static getInstance(){
        if (!OnlyOne.instance){
            return new OnlyOne('Single instance');
        }

        return OnlyOne.instance;
    }
}

//Error if we directly create instance of singleton class
//console.log(new OnlyOne('sss'));
const singleInstance = OnlyOne.getInstance();
console.log(singleInstance);

//Error in below line as numberOfInstance is readonly property
//singleInstance.numberOfInstance = 2;



