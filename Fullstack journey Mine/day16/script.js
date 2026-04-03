/**
Day 16: Loops (for, forEach, map, filter, reduce).
👉 Task: Filter even numbers from an array.
 */

// Array
let numbers = [1, 2, 3, 4, 5, 6];


// 1️⃣ filter (best method)
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Filter:", evenNumbers);


// 2️⃣ for loop
let even2 = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        even2.push(numbers[i]);
    }
}
console.log("For loop:", even2);


// 3️⃣ forEach
let even3 = [];
numbers.forEach(num => {
    if (num % 2 === 0) {
        even3.push(num);
    }
});
console.log("forEach:", even3);


// 4️⃣ map (not ideal for filtering)
let result = numbers.map(num => num % 2 === 0 ? num : null);
console.log("Map:", result);


// 5️⃣ reduce
let even4 = numbers.reduce((acc, num) => {
    if (num % 2 === 0) acc.push(num);
    return acc;
}, []);
console.log("Reduce:", even4);