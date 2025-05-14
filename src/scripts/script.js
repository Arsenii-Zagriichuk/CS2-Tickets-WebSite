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



const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const postcodeRegex = /^[A-Za-z0-9]+$/;
const addressRegex = /^[A-Za-z0-9\s,]+$/;
const cityRegex = /^[A-Za-z\s]+$/;
const nameRegex = /^[A-Za-z\s]+$/;
const countryRegex = /^[A-Za-z\s]+$/;

document.addEventListener("DOMContentLoaded", function() {
  const emailInput = document.getElementById("email");
  const cityInput = document.getElementById("city");
  const postcodeInput = document.getElementById("postalCode");
  const addressInput = document.getElementById("address");
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const countryInput = document.getElementById("country");
  
  function showError(input, message) {
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
    
    input.classList.add('input-error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    input.parentElement.appendChild(errorDiv);
  }
  
  function clearError(input) {
    input.classList.remove('input-error');
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
  }
  
  const allInputs = [emailInput, cityInput, postcodeInput, addressInput, 
                    firstNameInput, lastNameInput, countryInput];
  
  allInputs.forEach(input => {
    if (input) {
      input.addEventListener('input', function() {
        clearError(input);
      });
      
      input.addEventListener('invalid', function(e) {
        e.preventDefault();
      });
    }
  });
  
  const checkoutForm = document.querySelector(".checkoutForm");
  if (checkoutForm) {
    checkoutForm.setAttribute("novalidate", "");
  }
  
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
    
    if (firstNameInput) {
      const firstName = firstNameInput.value;
      if (!nameRegex.test(firstName) || firstName === "") {
        showError(firstNameInput, "Please enter a valid first name");
        isValid = false;
      }
    } else {
      isValid = false;
    }
    
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
      window.location.href = "/Payment";
    } else {
      allInputs.forEach(input => {
        if (input && input.classList.contains('input-error')) {
          input.value = "";
        }
      });
    }
  }
  
  const button = document.getElementById("proceedToPayment");
  
  if (button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      proceedToPayment();
    });
  }
}); // End of DOMContentLoaded event listener


document.addEventListener("DOMContentLoaded", function() {
  const cardNumberInput = document.getElementById("card-number");
  const cardDateInput = document.getElementById("expiry-date");
  const cardCVCInput = document.getElementById("cvv");
  const nameOnCardInput = document.getElementById("name-on-card");
  
  const paymentForm = document.querySelector(".checkoutForm");
  if (paymentForm) {
    paymentForm.setAttribute("novalidate", "");
  }
  
  function showPaymentError(input, message) {
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
    
    input.classList.add('input-error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    input.parentElement.appendChild(errorDiv);
  }
  
  function clearPaymentError(input) {
    input.classList.remove('input-error');
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
  }
  
  const allPaymentInputs = [cardNumberInput, cardDateInput, cardCVCInput, nameOnCardInput];
  
  allPaymentInputs.forEach(input => {
    if (input) {
      input.addEventListener('input', function() {
        clearPaymentError(input);
      });
      
      input.addEventListener('invalid', function(e) {
        e.preventDefault();
      });
    }
  });
  
  function cardNumberValidation() {
    if (!cardNumberInput) return false;
    const cardNumber = cardNumberInput.value.replace(/\s/g, '');
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
      allPaymentInputs.forEach(input => {
        if (input) {
          input.value = "";
        }
      });
      
      setTimeout(() => {
        window.location.href = "/CommentsPage";
      }, 1500);
    } else {
      allPaymentInputs.forEach(input => {
        if (input && input.classList.contains('input-error')) {
          input.value = "";
        }
      });
    }
  }
  
  const paymentButton = document.getElementById("paymentButton");

  if (paymentButton) {
    paymentButton.addEventListener("click", function(event) {
      event.preventDefault();
      processPayment();
    });
  }
}); // End of DOMContentLoaded event listener


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



