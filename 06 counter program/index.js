// const = a variable that cannot be reassigned
// an extra security measure to prevent accidental reassignment of a variable

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

let count = 0;

decreaseBtn.addEventListener("click", function(){
    count--;
    document.getElementById("countLabel").textContent = count;
})

resetBtn.addEventListener("click", function(){
    count = 0;
    document.getElementById("countLabel").textContent = count;
})

increaseBtn.addEventListener("click", function(){
    count++;
    document.getElementById("countLabel").textContent = count;
})