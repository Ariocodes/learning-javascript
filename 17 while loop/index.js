
const p1 = document.getElementById("p1");


// while (username === ""){
//     username = window.prompt(`Enter your name`);
// }




// let username;

// do{
//     username = window.prompt(`Enter your name`);
// } while (username ==="")


// p1.textContent = `Hello, ${username}`;
// console.log(`Hello, ${username}`);









let loggedIn = false;
let username;
let password;


while (!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if(username === "admin" && password === "admin"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else {
        console.log("Invalid credentials! Please try again.")
    }
}