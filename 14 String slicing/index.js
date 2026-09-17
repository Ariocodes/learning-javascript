


const fullName = "Ario Bashiri";

//let firstName = fullName.slice(0, 4); // from index 0 to 4 (4 not included)
//let lastName = fullName.slice(5, fullName.length);
// OR:
//lastName = fullName.slice(5); // no need to have and end index

//let firstChar = fullName.slice(0, 1);
//let lastChar = fullName.slice(-1);

//let lastFewChars = fullName.slice(-3); // -3 index from the end till the end
// console.log(firstName);
// console.log(lastName);

// console.log(firstChar);
// console.log(lastChar);

// console.log(lastFewChars);





let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName);


const emailInput = document.getElementById("emailInput");
const submitBtn = document.getElementById("submitBtn");
const addressParagraph = document.getElementById("p1");
const domainParagraph = document.getElementById("p2");

submitBtn.addEventListener("click", function(){
    let fullEmail = emailInput.value;
    let address = fullEmail.slice(0, fullEmail.indexOf("@"));
    let domain = fullEmail.slice(fullEmail.indexOf("@") + 1);
    addressParagraph.textContent = `Your address is: ${address}`;
    domainParagraph.textContent = `Your domain is: ${domain}`;
})


