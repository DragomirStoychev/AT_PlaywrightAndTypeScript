//basic async operation
console.log('Start');

setTimeout(() => {
    console.log('Async Operation Complete');
}, 2000);

console.log('End');
// Output:
// Start
// End
// Async Operation Complete

//multiple async operations

function setTimeouts() {
    setTimeout(() => {
        console.log('3 second delay');
    }, 3000);
    setTimeout(() => {
        console.log('1 second delay');
    }, 1000);
    setTimeout(() => {
        console.log('2 second delay');
    }, 2000);
};
// Output:
// 1 second delay
// 2 second delay
// 3 second delay
setTimeouts();

//async await syntax
function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    await delay(3000);
    console.log('After 3 seconds')

    await delay(2000)
    console.log('After 2 seconds')
    
}
demo();
// Output:
// After 3 seconds
// After 2 seconds

//get product data
interface Rating {
    rate: number;
    count: number;
}

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

async function getData(): Promise<void> {
    try{
    const response = await fetch('https://fakestoreapi.com/products/1');
    const data: Product = await response.json();
    console.log("response: ", data);
    } catch (err){
        console.error(err);
    }
}
getData();
// Output:
// response:  { id: 1, title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', price: 109.95, description: 'Your perfect pack for everyday use and walks in the forest...', category: 'men\'s clothing', image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', rating: { rate: 3.9, count: 120 } }



//try catch finally
try {
    const jsonData = JSON.parse('{"valid: true"}');
    console.log(jsonData);
} catch (err) {
    console.error("invalid JSON:", err);
} finally {
    console.log("Execution completed.");
}
// Output:
// invalid JSON: [SyntaxError: Unexpected token v in JSON at position 2]
// Execution completed.: "

//try/catch/finally exercise

function divideNumbers(numberOne: number, numberTwo: number)  {
   try {
         if (numberTwo === 0) {
        throw new Error("Division by zero is not allowed.");
         } else {
        const result: number = numberOne / numberTwo;
        console.log(`Result: ${result}`);
         }
        
    } catch (err: unknown) {
        console.error(err);
    } finally {
        console.log("Execution completed.");
    }
};
divideNumbers(10, 2); // Result: 5
divideNumbers(10, 0); // Error: Division by zero is not allowed.
// Output:
// Result: 5
// Execution completed.
// Error: Division by zero is not allowed.
// Execution completed.

