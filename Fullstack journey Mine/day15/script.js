/**
Day 15: ES6+ → template literals, destructuring, spread/rest.
👉 Task: Rebuild student object using ES6 features.
 */

// Student object
const student = {
    id: 1,
    name: "Shivam",
    marks: [85, 90, 78]
};

// Destructuring
const { id, name, marks } = student;

// Template literal
console.log(`ID: ${id}`);
console.log(`Name: ${name}`);
console.log(`Marks: ${marks}`);

// Spread operator (copy + add new mark)
const newMarks = [...marks, 95];
// const newMarks2 = [...marks, 96];
console.log("Updated Marks:", newMarks);

// Rest operator (sum of marks)
function totalMarks(...nums) {
    let sum = 0;
    for (let n of nums) {
        sum += n;
    }
    return sum;
}

console.log("Total:", totalMarks(...marks));