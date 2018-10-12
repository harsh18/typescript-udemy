//####Types
//:String
let myname = 'test1';
//myname = 23; //Error cannot assign integer to String type

let marks = 23;
//marks = 'string'; //Error

//Explicit type checking
let place:string;

place = 'Delhi';
//place = 23; //Error

//let places: any[] = ['delhi', 'ncr'];
let places: string[] = ['delhi', 'ncr'];
//places[0] = 3;

console.log(places[0]);

//Tuples
let address: [string, number] = ["janta flats", 58];
//let address1: [string, number] = [58, "janta flats"]; //Error

//Enums
enum ActionTypes {
    SUCCESS,
    DANGER
}

// enum ActionTypes {
//     SUCCESS : 'success',
//     DANGER : 'danger'
// }

console.log(ActionTypes.SUCCESS);
console.log(ActionTypes.DANGER);

//Any
let company:any = 'google';
console.log(company);

company = {};
console.log(company);