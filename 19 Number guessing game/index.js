
const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const p1 = document.getElementById("p1");

let attempts = 0;
let guess;
let running = true;

submitBtn.addEventListener("click", function(){
    guess = Number(guessInput.value);
    if(isNaN(guess)){
        p1.textContent = "Please enter a valid number";
    }
    else if ( guess < minNum || guess > maxNum){
        p1.textContent = "Please enter a valid number";
    }
    else{
        attempts++;
        if (guess > answer){
            p1.textContent = "TOO HIGHT! TRY AGAIN!";
        }
        else if (guess < answer){
            p1.textContent = "TOO LOW! TRY AGAIN!";
        }
        else {
            p1.textContent = `You guessed correctly! ${guess} is the correct answer. It took you ${attempts} attempts.`;
            running = false;
        }
    }
})
