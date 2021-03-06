// Exercise 1
// function Car(name) {
//     this.name = name;
//     this.acceleration = 0;

//     this.honk = function() {
//         console.log("Toooooooooot!");
//     };

//     this.accelerate = function(speed) {
//         this.acceleration = this.acceleration + speed;
//     }
// }
// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
//console.log(car.acceleration);

class Car{
    public acceleration: number = 0;
    constructor(public name: string){}

    honk():void{
        console.log("Toooooooooot!");
    }

    accelerate(speed:number):void{
        this.acceleration = speed;
    }
}

const car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

//////////////////////////////////////////////////////////////

// Exercise 2
// var baseObject = {
//     width: 0,
//     length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };
// console.log(rectangle.calcSize());

abstract class BaseObject{
    public width: number = 0;
    public length: number = 0;
}

class Reactangle extends BaseObject{
    constructor(width: number, length: number){
        super();
        this.width = width;
        this.length = length;
    }

    calcSize():number{
        return this.width * this.length;
    }
}

const reactangle = new Reactangle(5, 2);
console.log(reactangle.calcSize());

///////////////////////////////////////////////////////////////

// Exercise 3
// var person = {
//     _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);

class PersonA{
    private _firstName: string = '';

    get firstName(){
        return this._firstName;
    }

    set firstName(value:string){
        if (value.length > 3){
            this._firstName = value;
        } else { 
            this._firstName = '';
        }
    }
}

const goodPerson = new PersonA();

console.log(goodPerson.firstName);
goodPerson.firstName = 'Ma';
console.log(goodPerson.firstName);
goodPerson.firstName = 'Maximilian';
console.log(goodPerson.firstName);