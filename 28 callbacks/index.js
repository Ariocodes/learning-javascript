
// callback = a function that is passsed as an argument to another function.
//  used to handle asynchronous operations:
//      1. Reading a file
//      2. Network requests
//      3. Interacting with databases

hello(); 
goodbye();



function hello(){
    setTimeout(function() {
        console.log("Hello!");
    }, 1000); // will wait for one second to execute
}

function goodbye(){
    console.log("Goodbye!");
}

// the goodbye function runs first since it finishes faster. But sometimes we want the program to run by order. 
// That's where we use callback


function hello2(callback){
    setTimeout(function() {
        console.log("Hello!");
    }, 1000); // will wait for one second to execute
    callback();
}

function goodbye2(){
    console.log("Goodbye2!");
}

hello2(goodbye2);