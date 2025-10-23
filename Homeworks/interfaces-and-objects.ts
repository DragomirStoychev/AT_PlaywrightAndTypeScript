// 1

interface Person {
  name: string;
  lastName: string;
  age: number;
  email: string;
  phoneNumber: number;
};

// 2

interface PersonInfo extends Person {
  country?: string;
  greeting?: () => string;
};

// 3

const person1: Person = {
  name: "Ivan",
  lastName: "Petrov",
  age: 25,
  email: "ivan.petrov@mail.com",
  phoneNumber: 1234,
};

console.log("Person 1:", person1);

// 4

const person2: PersonInfo = {
  name: "Teodora",
  lastName: "Ivanova",
  age: 22,
  email: "teodora.ivanova@example.com",
  phoneNumber: 5678,
  country: "Bulgaria",
  greeting() {
    return `Hello! My name is ${this.name} ${this.lastName} from ${this.country}.`;
  },
};

console.log("Person 2:", person2);
