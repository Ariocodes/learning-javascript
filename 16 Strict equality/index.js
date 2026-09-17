//   = assign operator
//  == comparison operator       (compare if values are equal)
// === strict equality operator  (compare if values & datatype are equal)
//  != inequality operator
// !== strict inequality operator

const PI = 3.14;

console.log("PI = 3.14    (integer)");

console.log("for:      if (PI == \"3.14\") we have:");
if ( PI == "3.14"){
    console.log("That is Pi");
}
else {
    console.log("That is NOT Pi");
}
console.log();


console.log("for:      if (PI === \"3.14\") we have:");
if (PI === "3.14"){
    console.log("That is Pi");
}
else{
    console.log("That is NOT Pi");
}
console.log();


console.log("for:      if (PI != \"3.14\") we have:");
if ( PI != "3.14"){
    console.log("That is NOT Pi");
}
else {
    console.log("That is Pi");
}
console.log();


console.log("for:      if (PI !== \"3.14\") we have:");
if (PI !== "3.14"){
    console.log("That is NOT Pi");
}
else{
    console.log("That is Pi");
}

