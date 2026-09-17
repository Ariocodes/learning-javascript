
const inputTextBox = document.getElementById("inputTextBox");
const submitBtn = document.getElementById("submitBtn");
const p1 = document.getElementById("p1");



submitBtn.addEventListener("click", function(){
    let username = inputTextBox.value;

    // ------------- NO METHOD CHAINING -------------
    // username = username.trim();
    // let letter = username.charAt(0);
    // letter = letter.toUpperCase();
    // let extraChars = username.slice(1);
    // extraChars = extraChars.toLowerCase();
    // username = letter + extraChars;


    
    // ------------- METHOD CHAINING -------------
    // Instead of all the lines above, we can do method chaining like:
    username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();



    
    p1.textContent = username;
})







