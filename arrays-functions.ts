

// 1)

const cars: string[] = ["BMW", "OPEL", "MAZDA"];
cars.push("MERCEDES");
console.log("1) cars:", cars); // ["BMW", "OPEL", "MAZDA", "MERCEDES"]

// 2)

const nums: number[] = [10, 20, 30, 40];
const removedFirst = nums.shift(); 
console.log("2) nums:", nums,); // [20, 30, 40]

// 3)

const baseMap: number[] = [1, 2, 3, 4, 5];
const halved = baseMap.map(n => n / 2);
console.log("3) halved:", halved); // [0.5, 1, 1.5, 2, 2.5]

//4)

const baseFilter: number[] = [3, 7, 1, 9, 12, 4];
const greaterThan5 = baseFilter.filter(n => n > 5);
console.log("4) >5:", greaterThan5); // [7, 9, 12]


//5)
const baseSort: number[] = [9, 3, 7, 2, 8, 5];
baseSort.sort((a, b) => a - b);
console.log("5) sorted asc:", baseSort); // [2, 3, 5, 7, 8, 9]

//6)

const fruits: string[] = ["apple", "banana", "cherry", "date", "elderberry"];
const firstThree = fruits.slice(0, 3);
console.log("6) firstThree:", firstThree); // ["apple", "banana", "cherry"]

 //7)

const vehicles: string[] = ["car", "bike", "bus", "train", "boat"];
const removed = vehicles.splice(1, 2);
console.log("7) vehicles after splice:", vehicles); // ["car", "train", "boat"]

//8)

function findLargest(a: number, b: number, c: number): number {
  let largest = a;
  if (b > largest) largest = b;
  if (c > largest) largest = c;
  return largest;
}
console.log("8) largest of (15, 42, 7):", findLargest(15, 42, 7)); // 42

//9)

function convertToCentimeters(inches: number = 1): number {
  return inches * 2.54;
}
console.log("9) default inches (1) → cm:", convertToCentimeters()); // 2.54
console.log("9) 10 inches → cm:", convertToCentimeters(10)); // 25.4

//10)

function calculateArea(width: number, height?: number): number {
  return height === undefined ? width * width : width * height;
}
console.log("10) square area (5):", calculateArea(5));       // 25
console.log("10) rect area (5x8):", calculateArea(5, 8));    // 40
