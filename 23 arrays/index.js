


let fruits = ["apple", "orange", "banana"];


fruits[0] = "apple";
fruits.push("coconut"); // adds to the end
fruits.pop(); // pops the last element
fruits.unshift("mango"); // adds to the beginning of the array
fruits.shift(); // removes an element from the beginning

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

let numOfFruits = fruits.length;

console.log(numOfFruits);

let index = fruits.indexOf("apple");
console.log(index);

index = fruits.indexOf("mango"); // will return -1 since it doesn't exist in the array
console.log(index);


for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
console.log();

fruits.sort(); // sorts in alphabetical order
fruits.reverse(); // reverses the order

// foreach loop:
for(let fruit of fruits){
    console.log(fruit);
}
