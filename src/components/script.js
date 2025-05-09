const tickets = document.querySelectorAll(".ticketImage");
const closeButtons = document.querySelectorAll(".closePopup");

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.querySelectorAll(".ticketDescription.active").forEach((popUp) => {
      if (popUp.classList.contains("closing")) return;

      popUp.classList.add("closing");
      popUp.classList.add("inactive");

      popUp.addEventListener(
        "animationend",
        () => {
          popUp.classList.remove("active", "inactive", "closing");
        },
        { once: true }
      );
    });
  }
});



// constants 
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const postcodeRegex = /^[A-Za-z0-9]+$/;
const addressRegex = /^[A-Za-z0-9]+$/;
const cityRegex = /^[A-Za-z]+$/;
const cardNumberRegex = /^[0-9]{16}$/;
const cardDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
const cardCVVRegex = /^[0-9]{3}$/;
const nameRegex = /^[A-Za-z]+$/;
const emailInput = document.getElementById("email");
const cityInput = document.getElementById("city");
const postcodeInput = document.getElementById("postcode");
const addressInput = document.getElementById("address");






function emailValidation(){
  const email = emailInput.value;
  if (!emailRegex.test(email) || email === "") {
    alert("Please enter a valid email address");
    return false;
  }
  return true;
}

function cityValidation(){
  const city = cityInput.value;
  if(cityRegex.test(city) || city === ""){
    alert("Please enter a valid address");
    return false;
  }
  return true;
}

function addressVAlidation(){
  const address = addressInput.value;
  if(addressRegex.test(address) || address === ""){
    alert("Please enter a valid address");
    return false;
  }
  return true;
}

function postcodeValidation(){
  const postcode = postcodeInput.value;
  if(postcodeRegex.test(postcode) || postcode === ""){
    alert("Please enter a valid postcode");
    return false;
  }
  return true;
}

function checkoutDatavalidation(){
  return emailValidation() && cityValidation() && addressVAlidation() && postcodeValidation();
}


function proceedToPayment(){
  if(checkoutDatavalidation()){
    alert ("Proceeding to payment...");
    emailInput.value = "";
    cityInput.value = "";
    postcodeInput.value = "";
    addressInput.value = "";
  }else{
    emailInput.value = "";
    cityInput.value = "";
    postcodeInput.value = "";
    addressInput.value = "";
    alert("Please fill in all fields correctly.");
  }

}

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("proceedToPayment");
  button.addEventListener("click", function (event) {
    event.preventDefault();
    proceedToPayment();
  });
});



function cardNumberValidation(){
  const cardNumber = cardNumberInput.value;
  if(cardNumberRegex.test(cardNumber) || cardNumber === ""){
    alert("Please enter a valid card number");
    return false;
  }
  return true;
}

function cardDateValidation(){
  const cardDate = cardDateInput.value;
  if(cardDateRegex.test(cardDate) || cardDate === ""){
    alert("Please enter a valid card date");
    return false;
  }
  return true;
}

function cardCVCValidation(){
  const cardCVC = cardCVCInput.value;
  if(cardCVCRegex.test(cardCVC) || cardCVC === ""){
    alert("Please enter a valid card CVV");
    return false;
  }
  return true;
}

function nameValidation(){
  const name = nameInput.value;
  if(nameRegex.test(name) || name === ""){
    alert("Please enter a valid name");
    return false;
  }
  return true;
}

function paymentValidation(){
  return cardNumberValidation() && cardDateValidation() && cardCVCValidation() && nameValidation();
}


function finishPayment(){
  if(paymentValidation()){
    alert("Payment successful");
    
  }else{
    cardNumberInput.value = "";
    cardDateInput.value = "";
    cardCVCInput.value = "";
    nameInput.value = "";
    alert("Please fill in all fields correctly.");
  }
}


const paymentButton = document.getElementById("paymentButton");
paymentButton.addEventListener("click", function (event) {
  event.preventDefault();
  finishPayment();
});




function commentValidation(){
  const comment = commentInput.value;
  if(comment === "" || comment.length < 10){
    alert("Please enter a comment");
    return false;
  }
  return true;
}

function finishComment(){
  if(commentValidation()){
    alert("Comment sent");
    commentInput.value = "";
  }else{
    commentInput.value = "";
    alert("Please enter a comment");
  }
}

const commentButton = document.getElementById("commentButton");
commentButton.addEventListener("click", function (event) {
  event.preventDefault();
  finishComment();
});



