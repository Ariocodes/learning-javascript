let age = 22;
let gpa = 2.9;

let firstName = "Ario";
let lastName = "Bashiri";
let email = "ario@ariobashiri.com";
let favoriteFood = "Pizza";
let isOnline = true;
let isStudent = true;

console.log(typeof age);
console.log(typeof firstName);
console.log(`Your name is ${firstName} ${lastName}`);
console.log(`Your age is: ${age}`);
console.log(`Yor GPA is ${gpa}`);
console.log(`Your email is ${email}`);
console.log(`Your favorite food is ${favoriteFood}`);
console.log(`User is online: ${isOnline}`);




document.getElementById("p1").textContent = `Your name is ${firstName} ${lastName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;