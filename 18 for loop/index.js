let fullName = "Ario Bashiri";

for (let i = 0; i < fullName.length; i++){
    console.log(fullName.charAt(i));
}

console.log();

for (let i = 1; i <= 20; i++){
    if (i == 13){
        continue;
    }
    console.log(i);
}