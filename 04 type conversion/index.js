// convert string to number using Number() function
// convert number to string using String() function
let x = "pizza";
let y = "pizza";
let z = "Pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);




let age;

document.getElementById("mySubmit").addEventListener("click", function(){
    age = document.getElementById("myText").value;
    age = Number(age);
    age++;
    document.getElementById("p1").textContent = age;
})


