
const output = document.getElementById("output");
const submitBtn = document.getElementById("submitBtn");
const ageInput = document.getElementById("ageInput");



submitBtn.addEventListener("click", function(){
    let age = Number(ageInput.value);
    let message = age >= 18 ? "You are an adult" : "You are a minor";
    output.textContent = message;
})

