// Let's keep it simple and only add the following methods to the Map:

// setItem(key: string, item: T) // should create a new key-value pair
 
// getItem(key: string) // should retrieve the value of the provided key
// clear() // should remove all key-value pairs
// printMap() // should output key-value pairs
// The map should be usable like shown below:

// const numberMap = new MyMap<number>();
// numberMap.setItem('apples', 5);
// numberMap.setItem('bananas', 10);
// numberMap.printMap();
 
// const stringMap = new MyMap<string>();
// stringMap.setItem('name', "Max");
// stringMap.setItem('age', "27");
// stringMap.printMap();

class MyMap<T extends number | string | object>{
    private newMap: {[key: string]: T} =  {};
    setItem(param1:string, param2:T){
        this.newMap[param1] = param2;
    }

    getItem(key:string){
        return this.newMap[key];
    }

    clear(){
        this.newMap = {};
    }

    printMap(){
        console.log(this.newMap);
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem("apples", 10);
numberMap.printMap();

const stringMap =  new MyMap<string>();
stringMap.setItem("apples", "10");
stringMap.printMap();

