



const subscribeBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const submitBtn = document.getElementById("submitBtn");

const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");




submitBtn.addEventListener("click", function(){
    if(subscribeBox.checked){
        subResult.textContent = "You are subscribed! Thanks!";
    }
    else subResult.textContent = "You are NOT subscribed :(";

    if(visaBtn.checked){
        paymentResult.textContent = "You are paying with Visa";
    }
    else if (masterCardBtn.checked){
        paymentResult.textContent = "You are paying with MasterCard";
    }
    else if (payPalBtn.checked){
        paymentResult.textContent = "You are paying with PayPal";
    }
    else{
        paymentResult.textContent = "You must select a payment method";
    }
})


