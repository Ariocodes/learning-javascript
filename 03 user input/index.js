let username;

// The easy way (using a prompt window)
// username = window.prompt("What's your username?");
// document.getElementById("p1").textContent = `Your username is: ${username}`;


// The hard way (using an input field and a button)
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Welcome, ${username}`;
}
