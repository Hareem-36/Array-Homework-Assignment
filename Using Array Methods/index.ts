const numbers: number[] = [10, 20, 30, 40, 50, 60, 70];

// 1) Create a new array with the squares of each number
const squares: number[] = numbers.map(num => num * num);
console.log("Squared numbers:", squares);

// 2) Filter out all numbers greater than 50
const filteredNumbers: number[] = numbers.filter(num => num <= 50);
console.log("Numbers less than or equal to 50:", filteredNumbers);

// 3) Use the reduce method to find the sum of all numbers in the array
const sum: number = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of all numbers:", sum);