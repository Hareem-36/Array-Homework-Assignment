// Step 1: Initialize the array with four different fruits
let fruits: string[] = ["Apple", "Banana", "Cherry", "Date"];

// Step 2: Add a new fruit to the end of the array
fruits.push("Strawberry");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date", "Strawberry"]

// Step 3: Remove the first fruit from the array
fruits.shift();
console.log(fruits); // Output: ["Banana", "Cherry", "Date", "Strawberry"]

// Step 4: Add a new fruit to the beginning of the array
fruits.unshift("Fig");
console.log(fruits); // Output: ["Fig", "Banana", "Cherry", "Date", "Strawberry"]

// Step 5: Find the index of a fruit and remove that fruit using the index
// Example: Remove "Cherry"
const index = fruits.indexOf("Cherry");
if (index !== -1) {
  fruits.splice(index, 1);
}
console.log(fruits); // Output: ["Fig", "Banana", "Date", "Strawberry"]