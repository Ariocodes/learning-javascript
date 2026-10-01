// The spread operator ... takes the elements inside an iterable (like an array) and expands them into individual values.


let numbers = [1, 2, 3, 4, 5];

console.log(numbers);
console.log(...numbers); // the three dots is the spread operator


let maximum = Math.max(...numbers);
console.log(maximum);

let minimum = Math.min(...numbers);
console.log(minimum);


// separating characters
let username = "Ario Bashiri";
let letters = [...username];
console.log(letters);
console.log(letters.join("-"));



let fruits = ["apple", "orange", "banana", "mango"];
console.log(fruits);

let newFruits = [...fruits];
console.log(newFruits);

let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"]; // combining two arrays and adding more
console.log(foods);