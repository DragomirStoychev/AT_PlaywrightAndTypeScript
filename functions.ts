// Functions

function displayPersonalData(name: string, age: number): string {
    return `My name is ${name}, I'm ${age} years old.`;
}
console.log(displayPersonalData('ivan', 20)); //My name is ivan, I'm 20 years old.

const personalData: string = displayPersonalData('Petar', 25); //My name is Petar, I'm 25 years old.

function multiplyNumbers(a: number, b: number): number {
    return a * b;
}
console.log(multiplyNumbers(5, 6)); //30

 function divideNumbers(a: number, b: number): number {
    return a / b;
}
console.log(divideNumbers(10, 2)); //5

// Arrow functions
const sumNums = (a: number, b: number): number => a + b; 
console.log(sumNums(3, 2)); //5

//optional parameters
function greeting(name: string, age?: number) {
    if (age) {
        return `Hello, my name is ${name} and I'm ${age} years old.`;
    }
    return `Hello, my name is ${name}.`;    
};
console.log(greeting('Ivan', 20)); //Hello, my name is Ivan and I'm 20 years old.
console.log(greeting('Pesho')); //Hello, my name is Pesho.

//default parameters
function calculatePrice(price: number, tax: number = 0.2): number {
    return price + (price * tax);
}
console.log(calculatePrice(100)); //120
console.log(calculatePrice(100, 0.1)); //110

//Function with parameter of union type
function printId(id: number | string): void {
    console.log(`ID - ${id} is type of ${typeof id}`);
};

printId(101); //ID - 101 is type of number
printId('#202'); //ID - 202 is type of string
//printId(true); //Error: Argument of type 'boolean' is not assignable to parameter of type 'number | string'.


