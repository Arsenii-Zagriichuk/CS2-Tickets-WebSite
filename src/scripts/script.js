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
      
      // Redirect to payment page or next step
      window.location.href = "/Payment";
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
  const button = document.getElementById("proceedToPayment");
  
  if (button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      proceedToPayment();
    });
  }
}); // End of DOMContentLoaded event listener


// Payment form validation
document.addEventListener("DOMContentLoaded", function() {
  // Payment form elements
  const cardNumberInput = document.getElementById("card-number");
  const cardDateInput = document.getElementById("expiry-date");
  const cardCVCInput = document.getElementById("cvv");
  const nameOnCardInput = document.getElementById("name-on-card");
  
  // Payment validation regex patterns
  const cardNumberRegex = /^[0-9]{16}$/;
  const cardDateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
  const cardCVCRegex = /^[0-9]{3,4}$/;
  const nameOnCardRegex = /^[A-Za-z\s]+$/;
  
  // Add error message display for payment fields
  function showPaymentError(input, message) {
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
  function clearPaymentError(input) {
    input.classList.remove('input-error');
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
  }
  
  // Add input event listeners to clear errors when user types
  const allPaymentInputs = [cardNumberInput, cardDateInput, cardCVCInput, nameOnCardInput];
  
  allPaymentInputs.forEach(input => {
    if (input) {
      input.addEventListener('input', function() {
        clearPaymentError(input);
      });
    }
  });
  
  function cardNumberValidation() {
    if (!cardNumberInput) return false;
    const cardNumber = cardNumberInput.value.replace(/\s/g, ''); // Remove spaces
    if (!cardNumberRegex.test(cardNumber) || cardNumber === "") {
      showPaymentError(cardNumberInput, "Please enter a valid 16-digit card number");
      return false;
    }
    return true;
  }
  
  function cardDateValidation() {
    if (!cardDateInput) return false;
    const cardDate = cardDateInput.value;
    if (!cardDateRegex.test(cardDate) || cardDate === "") {
      showPaymentError(cardDateInput, "Please enter a valid date (MM/YY)");
      return false;
    }
    return true;
  }
  
  function cardCVCValidation() {
    if (!cardCVCInput) return false;
    const cardCVC = cardCVCInput.value;
    if (!cardCVCRegex.test(cardCVC) || cardCVC === "") {
      showPaymentError(cardCVCInput, "Please enter a valid CVV/CVC code");
      return false;
    }
    return true;
  }
  
  function nameOnCardValidation() {
    if (!nameOnCardInput) return false;
    const nameOnCard = nameOnCardInput.value;
    if (!nameOnCardRegex.test(nameOnCard) || nameOnCard === "") {
      showPaymentError(nameOnCardInput, "Please enter a valid name");
      return false;
    }
    return true;
  }
  
  function paymentFormValidation() {
    const cardNumberValid = cardNumberValidation();
    const cardDateValid = cardDateValidation();
    const cardCVCValid = cardCVCValidation();
    const nameOnCardValid = nameOnCardValidation();
    
    return cardNumberValid && cardDateValid && cardCVCValid && nameOnCardValid;
  }
  
  function processPayment() {
    if (paymentFormValidation()) {
      // Payment successful
      alert("Payment successful! Thank you for your purchase.");
      
      // Clear form
      allPaymentInputs.forEach(input => {
        if (input) {
          input.value = "";
        }
      });
      
      // Redirect to confirmation page or home
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } else {
      // Clear invalid fields
      allPaymentInputs.forEach(input => {
        if (input && input.classList.contains('input-error')) {
          input.value = "";
        }
      });
    }
  }
  
  const paymentButton = document.getElementById("paymentButton");
  
    paymentButton.addEventListener("click", function(event) {
      event.preventDefault();
      processPayment();
    });
  }
);


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



