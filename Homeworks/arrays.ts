// arrays declaration
let numsArray: number[] = [1, 2, 3, 4, 5];
let stringsArray: string[] = ['Pesho', 'Gosho', 'Tosho', 'Ivan'];
let combinedArray: (number | string)[] = [1, 'Pesho', 'Ivan', 2];

//access element by index
stringsArray[0]; //Pesho
stringsArray[1]; //Gosho
combinedArray[2]; //ivan

//console.log(combinedArray[2]);

// access array length
numsArray.length; //5

//method map
let multiplyNums = numsArray.map((num: number) => num * 2); //[2,4,6,8,10]
//console.log(multiplyNums);
let mapNames = stringsArray.map((name: string) => `Hello, ${name}`); //['Hello, Pesho', 'Hello, Gosho', 'Hello, Tosho', 'Hello, Ivan']
//console.log(mapNames);
let checkTypeOf = combinedArray.map((el: number | string) => {
    if (typeof el === "number") {
        return el + 5;
    } else {
        return `Welcome ${el}`;
    }
});
//console.log(checkTypeOf);

//method filter
let positiveNums: number [] = [2,3,4,5,6];
let filteredArr: number [] = positiveNums.filter((num: number) => num >3); //[4,5,6]
//console.log(filteredArr);

//method sort
let sortNums: number[] = [100, 2, 30, 5, 40, 6];
let sortedResult: number[] = sortNums.sort((a: number, b: number) => a - b); //[2,5,6,30,40,100]

//method push
sortedResult.push(200); //[2,5,6,30,40,100,200]

//method pop
sortedResult.pop(); //[2,5,6,30,40,100]

//method shift
sortedResult.shift(); //[5,6,30,40,100]

//method unshift
sortedResult.unshift(1); //[1,5,6,30,40,100]

