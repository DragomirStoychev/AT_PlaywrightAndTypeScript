//  let vs const
let num: number = 5;
num = 10;
num = 15;

const welcomeMssg: string = 'Welcome!';
// Cannot assign to 'welcomeMssg' because it is a constant.
// welcomeMssg = "Welcome, Peter!"

// string
let message: string = 'Hello, Peter!';

//returns string length
let messageLength: number = message.length;
//console.log(messageLength);

// string interpolation
let welcomeMessageDetails: string = `Text message length is ${messageLength}`;
//onsole.log(welcomeMessageDetails);

// number and number operations

let numOne: number = 10;
let numTwo: number = 5;

let add: number = numOne + numTwo;
let subtract: number = numOne - numTwo;
let multiply: number = numOne * numTwo;
let divide: number = numOne / numTwo;

// boolean (true/false)
let isEqual: boolean = numOne === numTwo;
//console.log(isEqual);
let isGreater: boolean = numOne > numTwo;
let isGreaterOrEqual: boolean = numOne >= numTwo;
let isLesser: boolean = numOne < numTwo;

//logical operators
let areEqualTo: boolean = numOne === 10 && numTwo === 5;
let isAnyNumEqualTo: boolean = numOne === 10 || numTwo === 10;
//console.log("areEqualTo", areEqualTo);
//console.log("isAnyNumEqualTo", isAnyNumEqualTo);

// Conditions

// ternary operator
let isNumOneEqualToTen: string = numOne === 10 ? 'Yes' : 'No';
//console.log(isNumOneEqualToTen);

let positiveNumComparison: string = numOne > 0 ? `The number ${numOne} is positive` : `The number ${numOne} is negative`;
//console.log(positiveNumComparison);

// if/else statement
const numThree: number = 100;

if (numThree <= 10) {
    console.log(`The number ${numThree} is less or equal to 10`);
} else if (numThree > 110) {
    console.log(`The number ${numThree} is greater than 110`);
} else if (numThree > 50) {
    console.log(`The number ${numThree} is greater than 50`);
} else {
    console.log(`The number ${numThree} is not greater than 3`);
}

//union types
let id: string | number;
id = 20;
id = 'Twenty';
// id = true; // Error: Type 'boolean' is not assignable to type 'string | number'

let result: number | boolean |null;


