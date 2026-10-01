// The rest parameters allow a function work with a variable number of arguments by bundling them into an array.
// it's the opposite of the spread operator.

function openFridge(...foods){ // accepts any nubmer of arguments (similar to "*args" in python)
    console.log(foods);
}

function getFood(...foods){
    return foods;
}


const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);



function sum(...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(32, 5, 35, 5, 67, 94, 23);
console.log(`Your total is $${total}`);



function getAverate(...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const average = getAverate(75, 100, 85, 60, 83, 58);
console.log(`Average is ${average}`);


function combineString(...strings){
    return strings.join(" ");
}


let fullName = combineString("Mr.", "Ario", "Bashiri", "III");
console.log(`Full name is ${fullName}`);