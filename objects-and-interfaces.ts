//interface declaration
interface Car {
    type: string;
    model: string;
    colour: string;
    horsePower: number;
};

interface Person {
    name: string;
    lastName: string;
    address: string;
    age: number;
    hobbies: string[];
    greeting: () => string;
};


//Object declaration
const car: Car = {
  type: "BMW",
  model: "X5",
  colour: "white",
  horsePower: 400
};

//object with method and array value
const person: Person = {
    name: "Ivan",
    lastName: "Ivanov",
    address: "bul. Vitoshka 30",
    age: 30,
    hobbies: ["football", "tennis", "hiking"],
    greeting: function() {
        return `Hello! My name is ${this.name} ${this.lastName}.`;
    }
};

// property access
car.type
person.name
person.hobbies[1]
person["address"]

const key ="name";
const testObj = {
    name: "Pesho",
    age: 20
};
//console.log(testObj[key]); //Pesho

person.greeting();
person["greeting"]();

//properties redeclaration
person.age = 35;
//console.log(person.age); //35

//let vs const redeclaration
let dog = {name: "Spark"};
dog.name = "Buddy"; //valid
dog = {name: "Max"}; //valid

const cat = {name: "Kitty"};
cat.name = "Luna"; //valid
//cat = {name: "Molly"}; //invalid

//explicit object type
const mouse: { name: string; favFood: string; age: number } = {
    name: "Jerry",
    favFood: "cheese",
    age: 2
};

//interfaces - optional parameters, read only and string literals

interface User {
    name: string;
    readonly email: string;
    role: 'user' | 'admin' | 'super-admin'; //string literal
    job?: string; //optional parameter
    password?: string | number; //optional parameter
};

const user: User = {
    name: 'Tom',
    email: "tom@mail.com",
    password: 123456,
    //role: 'manager', //invalid
    role: "admin",
    job: "QA"
};
//optional parameters added later
user.password = "newPassword";
//user.email = "test@mail.com"; //invalid because email is readonly
//console.log(user);

const secondUser: User = {
    name: 'Tom',
    email: "tom@mail.com",
    password: 123456,
    role: "admin",
    job: "QA"
};

interface UserPermissions extends User {
    permissions: string;
}

const thirdUser: UserPermissions = {
    name: 'Tom',
    email: "tom@mail.com",
    password: 123456,
    role: "admin",
    job: "QA",
    permissions: "denied"
};

// exercise sum total price
interface Product {
    name: string;
    price: number;
    getTotalPrice: (quantity: number) => number;
};

const phone: Product = {
    name: "Nokia",
    price: 100,
    getTotalPrice: function (quantity: number) {
        return this.price * quantity;
    }
};

function orderDetails (quantity: number, product: Product) {
        console.log("Order for: ", product.name);     
        console.log(`Product quantity: ${quantity}`);
        console.log(`Product unit price: ${product.price} $`);
        console.log(`Total price: ${product.getTotalPrice(quantity)} $`);
};

orderDetails(3, phone);
