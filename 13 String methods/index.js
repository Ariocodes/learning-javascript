


let userName = "Ario Bashiri   ";

console.log(userName.charAt(0));
console.log(userName.indexOf("i")); // the first occurance
console.log(userName.lastIndexOf("i")); // the last occurance
console.log(userName.length);
console.log(userName.trim()); // get rid of space before or after the text
console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
console.log(userName.repeat(3));
console.log(userName.startsWith("A"));
console.log(userName.endsWith(" "));



let phoneNumber = "123-456-7890";

phoneNumberWithoutDashes = phoneNumber.replaceAll("-", ""); // replace all the occurances of the first input with the second input
console.log(phoneNumberWithoutDashes);

startPaddedPhoneNumber = phoneNumber.padStart(15, "0");
endPaddedPhoneNumber = phoneNumber.padEnd(15, "0");

console.log(startPaddedPhoneNumber);
console.log(endPaddedPhoneNumber);
