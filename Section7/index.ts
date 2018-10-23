//Contract using interface
interface Vehicle {
    name: string;
    year?: number; //Optional prop
    [propName: string]: any;
    showModelYear(vehicleType: string): void;
}

function ShowVehicle(vehicle: Vehicle){
    console.log(`${vehicle.name}`);
}

const hyundai:Vehicle = { //Still working as year is optional
    name: 'Creta',
    showModelYear(vehicleType){
        console.log(`${vehicleType} manufactoring year is 2019`);
    }
}

ShowVehicle(hyundai);

hyundai.showModelYear('Creta');

//Interface: Function type 

interface multiply{
    (number1: number, number2: number): number;
}

let multiplyTwoNumbers: multiply;

multiplyTwoNumbers = (val1: number, val2: number) => {
    return val1 * val2;
}

