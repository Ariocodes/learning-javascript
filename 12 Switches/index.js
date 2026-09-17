
const output = document.getElementById("output");
const submitBtn = document.getElementById("submitBtn");
const dayInput = document.getElementById("dayInput");



submitBtn.addEventListener("click", function(){
    let day = Number(dayInput.value);
    let text;
    switch(day){
        case 1:
            text = "Today is Monday";
            break;
        case 2:
            text = "Today is Tuesday";
            break;
        case 3:
            text = "Today is Wednesday";
            break;
        case 4:
            text = "Today is Thursday";
            break;
        case 5:
            text = "Today is Friday";
            break;
        case 6:
            text = "Today is Saturday";
            break;
        case 7:
            text = "Today is Sunday";
            break;
        default:
            text = `Invalid input. ${day} is not a day`;
    }
    output.textContent = text;
})

