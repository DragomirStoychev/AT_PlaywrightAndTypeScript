//forEach method

const numbers: number[] = [10, 20, 30, 40];

numbers.forEach((num: number, index: number) => {
  console.log(`Index: ${index}, Value: ${num}`);
});


//sum nums
let sum: number = 0;
numbers.forEach((num: number) => {
  sum += num;
});
console.log(`Sum: ${sum}`); // Output: Sum: 100

//active users
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

const users: User[] = [
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
  { id: 3, name: "Charlie", isActive: true },
];

let activeIds: number[] = [];
users.forEach((user: User) => {
  if (user.isActive) {
    activeIds.push(user.id);
  }
});
console.log(`Active User IDs: ${activeIds}`); // Output: Active User IDs: 1,3



