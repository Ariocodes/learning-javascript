


let x = 449343843904; // global variable


function f1(){
    let x = 1; // local variable
    console.log(x);
}

function f2(){
    let x = 2; // local variable
    console.log(x);
}


f1();
f2();



let w = 20349; // global variable

function f3(){
    console.log(w);
}
function f4(){
    console.log(w);
}


f3();
f4();