//global variables to select credit card inputs
const cardNumberInput = document.getElementById('cc-num');
const zipInput = document.getElementById('zip');
const cvvInput = document.getElementById('cvv');
//create and append cardNumber error message
const cardNumberError = document.createElement('span');
cardNumberError.textContent = "Please enter a valid credit card number (13-16 digits)";
document.querySelector('label[for="payment"]').append(cardNumberError);
cardNumberError.classList.add('crediterror');
cardNumberError.hidden=true;
//cardNumber Regexes (includes extra credit regexes for conditional errors)
const cardNumberRegex= /^\d{13,16}$/;
const cardNumberShortRegex = /^\d{0,12}$/;
const cardNumberLongRegex = /^\d{17}(\d*)?$/;
//cardNumber validator function
const cardNumberValidator = () => {
  let cardNumberValue = cardNumberInput.value;
  if(cardNumberRegex.test(cardNumberValue)){
    cardNumberInput.style.borderColor = "white";
    cardNumberError.hidden=true;
    return true;
  }else if(cardNumberShortRegex.test(cardNumberValue)){
      cardNumberInput.style.borderColor = "red";
      cardNumberError.textContent=`The credit card number provided is less
      than 13 digits.  Please enter a valid credit card number
      between 13-16 digits`;
      cardNumberError.hidden=false;
      return false;
  }else if (cardNumberLongRegex.test(cardNumberValue)) {
      cardNumberError.textContent=`The credit card number provided is more
      than 16 digits.  Please enter a valid credit card number
      between 13-16 digits`;
      cardNumberInput.style.borderColor = "red";
      cardNumberError.hidden=false;
      return false;
  }else{
      cardNumberError.textContent=`Invalid credit card number.  Make sure to
      input 13-16 digits with only numbers`;
      cardNumberInput.style.borderColor = "red";
      cardNumberError.hidden=false;
      return false;
  }
}
//if user changes payment method after getting errors for credit card
payment.addEventListener('change', (e) => {
  if(payment.value==='paypal' || payment.value==='bitcoin'){
    cardNumberError.hidden=true;
    zipError.hidden=true;
    cvvError.hidden=true;
  }
});
//create and append zip code error message
const zipError = document.createElement('span');
zipError.textContent = "Please enter a valid zip code (5 digits)";
document.querySelector('label[for="payment"]').append(zipError);
zipError.classList.add('crediterror');
zipError.hidden=true;
//Zip Code Regex
const zipRegex= /^\d{5}$/;
//Zip Code validator function
const zipValidator = () => {
  let zipValue = zipInput.value;
  if(zipRegex.test(zipValue)){
    zipInput.style.borderColor = "white";
    zipError.hidden=true;
    return true;
  }else{
    zipInput.style.borderColor = "red";
    zipError.hidden=false;
    return false;
  }
}
//create and append CVV error message
const cvvError = document.createElement('span');
cvvError.textContent = "Please enter a valid CVV (3 digits)";
document.querySelector('label[for="payment"]').append(cvvError);
cvvError.classList.add('crediterror');
cvvError.hidden=true;
//CVV Regex
const cvvRegex= /^\d{3}$/;
//CVV validator function
const cvvValidator = () => {
  let cvvValue = cvvInput.value;
  if(cvvRegex.test(cvvValue)){
    cvvInput.style.borderColor = "white";
    cvvError.hidden=true;
    return true;
  }else{
    cvvInput.style.borderColor = "red";
    cvvError.hidden=false;
    return false;
  }
}
//Extra Credit: real time error Messages for EMAIL
email.addEventListener('keyup', (e) => {
  let emailVal = email.value;
  if(emailRegex.test(emailVal)){
    email.style.borderColor = "white";
    emailError.hidden=true;
    return true;
  }else{
    email.style.borderColor = "red";
    emailError.hidden=false;
    return false;
  }
});
  //Create a single master validation function
    //call validator functions
document.querySelector('form').addEventListener('submit', (e) => {
  nameValidator();
  if (!nameValidator()){
    e.preventDefault();
    console.log("name validator prevented submission");
  }
  emailValidator();
  if (!emailValidator()){
    e.preventDefault();
    console.log("email validator prevented submission");
  }
  activitiesValidator();
  if (!activitiesValidator()){
    e.preventDefault();
    console.log("activities validator prevented submission");
  }
  if(payment.value==='credit card'){
    cardNumberValidator();
    if (!cardNumberValidator()){
      e.preventDefault();
      console.log("cardNumber validator prevented submission");
    }
    zipValidator();
    if (!zipValidator()){
      e.preventDefault();
      console.log("zip code validator prevented submission");
    }
    cvvValidator();
    if (!cvvValidator()){
      e.preventDefault();
      console.log("cvv validator prevented submission");
    }
  }
});


