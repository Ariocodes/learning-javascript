
function happyBirthday(username, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old`);
    console.log();
}

happyBirthday("Ario", 22);
happyBirthday("SpongeBob", 30);
happyBirthday("Patrick", 37);



function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function isEven(number){
    return number % 2 === 0;
}

function isValidEmail(email){
    return email.includes("@");
}

console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));
console.log(isEven(145824));
console.log(isValidEmail("ario@ariobashiri.com"));
