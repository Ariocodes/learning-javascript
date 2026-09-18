const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;


function convert(){
    if(toFahrenheit.checked){
        result.textContent = convertToCelsius(Number(textBox.value)).toFixed(1) + "°F"; // .toFixed(1) will give us one digit past the decimal.
    }
    else if(toCelsius.checked){
        result.textContent = convertToFahrenheit(Number(textBox.value)).toFixed(1) + "°C";
    }
    else{
        result.textContent = "select a unit";
    }
}


function convertToCelsius(value){
    return value * 9 / 5 + 32;
}

function convertToFahrenheit(value){
    return (value - 32) * 5 /9;
}