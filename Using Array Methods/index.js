var numbers = [10, 20, 30, 40, 50, 60, 70];
// 1) Create a new array with the squares of each number
var squares = numbers.map(function (num) { return num * num; });
console.log("Squared numbers:", squares);
// 2) Filter out all numbers greater than 50
var filteredNumbers = numbers.filter(function (num) { return num <= 50; });
console.log("Numbers less than or equal to 50:", filteredNumbers);
// 3) Use the reduce method to find the sum of all numbers in the array
var sum = numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
console.log("Sum of all numbers:", sum);
