



// console:
let randomNum = Math.random();
console.log(`Math.random() = ${randomNum}`);

let dice = Math.ceil(Math.random() * 6);
console.log(`Math.ceil(Math.random() * 6) = ${dice}`);


const minDemo = 50;
const maxDemo = 100;

randomNum = Math.ceil(Math.random() * (maxDemo - minDemo)) + minDemo
console.log(`Math.ceil(Math.random() * (${maxDemo} - ${minDemo})) + ${minDemo} = ${randomNum}`);




const rollBtn = document.getElementById("rollBtn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

rollBtn.addEventListener("click", function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = Number(randomNum1);
    label2.textContent = Number(randomNum2);
    label3.textContent = Number(randomNum3);
})