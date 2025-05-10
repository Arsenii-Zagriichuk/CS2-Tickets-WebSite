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



// Constants
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const postcodeRegex = /^[A-Za-z0-9]+$/;
const addressRegex = /^[A-Za-z0-9\s,]+$/; // Updated to include commas
const cityRegex = /^[A-Za-z\s]+$/;
const nameRegex = /^[A-Za-z\s]+$/;
const countryRegex = /^[A-Za-z\s]+$/;

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Form elements - get them after DOM is loaded
  const emailInput = document.getElementById("email");
  const cityInput = document.getElementById("city");
  const postcodeInput = document.getElementById("postalCode");
  const addressInput = document.getElementById("address");
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const countryInput = document.getElementById("country");
  
  // Add error message display
  function showError(input, message) {
    // Remove any existing error message
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
    
    // Add error class to input
    input.classList.add('input-error');
    
    // Create and append error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    input.parentElement.appendChild(errorDiv);
  }
  
  // Remove error styling and message
  function clearError(input) {
    input.classList.remove('input-error');
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
  }
  
  // Add input event listeners to clear errors when user types
  const allInputs = [emailInput, cityInput, postcodeInput, addressInput, 
                    firstNameInput, lastNameInput, countryInput];
  
  allInputs.forEach(input => {
    if (input) {
      input.addEventListener('input', function() {
        clearError(input);
      });
    }
  });
  
  function emailValidation() {
    if (!emailInput) return false;
    const email = emailInput.value;
    if (!emailRegex.test(email) || email === "") {
      showError(emailInput, "Please enter a valid email address");
      return false;
    }
    return true;
  }
  
  function cityValidation() {
    if (!cityInput) return false;
    const city = cityInput.value;
    if (!cityRegex.test(city) || city === "") {
      showError(cityInput, "Please enter a valid city name");
      return false;
    }
    return true;
  }
  
  function addressValidation() {
    if (!addressInput) return false;
    const address = addressInput.value;
    if (!addressRegex.test(address) || address === "") {
      showError(addressInput, "Please enter a valid address");
      return false;
    }
    return true;
  }
  
  function postcodeValidation() {
    if (!postcodeInput) return false;
    const postcode = postcodeInput.value;
    if (!postcodeRegex.test(postcode) || postcode === "") {
      showError(postcodeInput, "Please enter a valid postal code");
      return false;
    }
    return true;
  }
  
  function countryValidation() {
    if (!countryInput) return false;
    const country = countryInput.value;
    if (!countryRegex.test(country) || country === "") {
      showError(countryInput, "Please enter a valid country name");
      return false;
    }
    return true;
  }
  
  function nameValidation() {
    let isValid = true;
    
    // Check first name
    if (firstNameInput) {
      const firstName = firstNameInput.value;
      if (!nameRegex.test(firstName) || firstName === "") {
        showError(firstNameInput, "Please enter a valid first name");
        isValid = false;
      }
    } else {
      isValid = false;
    }
    
    // Check last name
    if (lastNameInput) {
      const lastName = lastNameInput.value;
      if (!nameRegex.test(lastName) || lastName === "") {
        showError(lastNameInput, "Please enter a valid last name");
        isValid = false;
      }
    } else {
      isValid = false;
    }
    
    return isValid;
  }
  
  function checkoutDataValidation() {
    const emailValid = emailValidation();
    const cityValid = cityValidation();
    const addressValid = addressValidation();
    const postcodeValid = postcodeValidation();
    const countryValid = countryValidation();
    const namesValid = nameValidation();
    
    return emailValid && cityValid && addressValid && postcodeValid && countryValid && namesValid;
  }
  
  function proceedToPayment() {
    if (checkoutDataValidation()) {
      // Store form data in localStorage before proceeding
      const formData = {
        email: emailInput.value,
        city: cityInput.value,
        postcode: postcodeInput.value,
        address: addressInput.value,
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        country: countryInput.value
      };
      localStorage.setItem("checkoutFormData", JSON.stringify(formData));
      
      // Redirect to payment page or next step
      window.location.href = "/payment";
    } else {
      // Clear invalid fields
      allInputs.forEach(input => {
        if (input && input.classList.contains('input-error')) {
          input.value = "";
        }
      });
    }
  }
  
  // Add event listener to the button
  const button = document.querySelector(".primaryButton");
  
  if (button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      proceedToPayment();
    });
  }
}); // End of DOMContentLoaded event listener



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


const paymentButton = document.querySelector(".jajaj");
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



