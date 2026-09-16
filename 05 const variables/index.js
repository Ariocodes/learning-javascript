// const = a variable that cannot be reassigned
// an extra security measure to prevent accidental reassignment of a variable

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").addEventListener("click", function(){
    radius = document.getElementById("userInput").value;
    circumference = 2 * PI * Number(radius);
    document.getElementById("h3").textContent = `The circumference is: ${circumference}cm`;
})