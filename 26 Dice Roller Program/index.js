

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const averageLabel = document.getElementById("averageLabel");
    const values = [];
    const images = [];


    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
    }
    
    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join("");
    let total = 0;
    for (let value of values){
        total += value;
    }

    // show the average

    averageLabel.textContent = `Average: ${findAverage(values)}`;
}


function findAverage(input){
    let total = 0;
    for (let value of input){
        total += value;
    }
    let average = (total / input.length).toFixed(2); // number of numbers after the decimal point
    return average;
}