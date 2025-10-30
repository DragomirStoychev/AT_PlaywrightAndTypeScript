//class declaration
class Person {
    // name: string;
    // age: number;
    
    constructor(public name: string,public age: number) {
        this.name = name;
        this.age = age;
    }

    introduction(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person1 = new Person ("Ivan", 30);
//person1.introduction(); //Hello, my name is Ivan and I am 30 years old.

person1.name; //Ivan
person1.age; //30

person1.name ="Petar" 
person1.name; //Petar


// readonly access modifier
class ReadonlyPersonData {
    readonly name: string;
    age: number;

    constructor(name: string, age: number){
        this .name = name;
        this.age = age;
    }

    intro(): void{
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person2 = new ReadonlyPersonData ("Todor", 25);
person2.age; //25
person2.name; //Todor

person2.age = 20; 
//person2.name = "Pesho"; //cannot assign to 'age' because it is a read-only property.


//private access modifier
class PrivatePersonData {
    private name: string;
    private age: number;

    constructor(name: string, age: number){
        this .name = name;
        this.age = age;
    }

    private displaySecretMessage(): string {
        return "This is a message rrom private method."
    }

    intro(): string{
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
    intro2(): void{
        console.log (`Hello, my name is ${this.name}.`,
        console.log (this.displaySecretMessage())
    }
}
const person3 = new PrivatePersonData ("David", 15);
//person3.name; //the property is private and only accesssable within class 'PrivatePersonData'
//person3.age; //the property is private and only accesssable within class 'PrivatePersonData'
person3.intro() //Hello, my name is David and I am 15 years old.
//person3.displaySecretMessage //the method is private and only accesssable within class 'PrivatePersonData'
person3.intro2 //Hello, my name is David | Hello, my name is David and I am 15 years old.



//class inheritance

class User{
    name: string;

    constructor (name: string){
        this.name = name;
    }

    intro(): void {
        console.log (`Nice to meet you!`)
    }
}

class userDetails extends User {
    constructor (name: string) {
        super (name)
    }

    showDetails(): void {
        console.log (`My name is ${this.name}`)
    }
}

const user = new userDetails(`Bobi`)
user.name; //Bobi
user.showDetails; //My name is Bobi
user.intro; //Nice to meet you!


//protected access modifier

class ProtectedPerson{
    // protected name: string;
    // protected age: number;

    constructor(protected name: string, protected age: number) {
        this.age = age;
        this.name = name;
    }    
    getProtectedData(): string{
    return "asd"
    }
}
const protectedPerson = new ProtectedPerson("Protected Person", 22)
//protectedPerson.name; // "name" is protected and only accesssable within class


class Student extends ProtectedPerson {
    private grade: number;

    constructor (name: string, age: number, grade: number){
        super(name,age);
        this.grade = grade
    }

    studentIntro ():void {
        console.log(this.getProtectedData());
        console.log(`${this.name} is ${this.age} years old with grade ${this.grade}.`);
    }    
}

const student = new Student('Hristo', 25, 6)
student.studentIntro(); 
//student.grade // private
