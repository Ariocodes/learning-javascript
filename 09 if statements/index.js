
const ageInput = document.getElementById("ageInput");
const ageSubmitBtn = document.getElementById("ageSubmitBtn");
const ageVerification = document.getElementById("ageVerification");

let age;

ageSubmitBtn.addEventListener("click", function(){
    age = ageInput.value; // value used for textbox
    age = Number(age);
    if (age >= 100){
        ageVerification.textContent = "You are TOO OLD to enter this site.";
    }
    else if (age >= 18){
        ageVerification.textContent = `Since you are ${age} (equal or above 18) you may enter.`; // textContent used for any text tag
    }
    else if (age == 0){
        ageVerification.textContent = "You cannot enter. You were just born.";
    }
    else if (age < 0){
        ageVerification.textContent = "Your age cannot be below 0.";
    }
    else ageVerification.textContent = `Since you are ${age} (below 18) you cannot enter.`;
})




const timeInput = document.getElementById("timeInput");
const timeSubmitBtn = document.getElementById("timeSubmitBtn");
const timeOutput = document.getElementById("timeOutput")

let time;

timeSubmitBtn.addEventListener("click", function(){
    time = timeInput.value;
    time = Number(time);
    if (time <= 12){
        timeOutput.textContent = "Good morning!";
    }
    else if (time <= 18){
        timeOutput.textContent = "Good afternoon!";
    }
    else if (time <= 24){
        timeOutput.textContent = "Good night!";
    }
})