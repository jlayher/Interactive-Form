/*
John Layher's JavaScript Project 3
I would like to be graded in regards to the "Exceeds Expectations" criteria.
If my project does not meet the requirements for the "Exceeds Expectations" grade
I would like to give this project another shot.  I would like my project to be
rejected in the case that my work does not "Exceed Expectations".
*/
//Put the first field in the focus state
document.getElementById('name').focus();
//Add an "Other" option to Job Roles Section(in HTML) and Hide it on Page Load
const otherTextBox = document.getElementById('other-title');
otherTextBox.hidden = true;
//Show the "Other" text field when "other" is selected in the Job Roles menu
const jobSelect = document.getElementById('title');
jobSelect.addEventListener('change', (event) => {
  if (event.target.value === "other") {
    otherTextBox.hidden = false;
  } else {
    otherTextBox.hidden = true;
  }
});
//T-Shirt Section
  //declare global variables
const designField = document.querySelector('#design');
const colorField = document.querySelector('#color');
  //hide the "select theme" `option` in the design menu
document.querySelector("#design option").hidden=true;
  //update the "Color" field to read "Please select a T-Shirt theme"
const selectShirtOp = document.createElement('option');
selectShirtOp.text = "Please select a T-Shirt theme";
colorField.prepend(selectShirtOp);
  //Hide the colors in the "color" drop down menu
const allColorOptions = document.querySelectorAll('#color option');
for (let i = 0; i < allColorOptions.length; i++) {
  allColorOptions[i].hidden = true;
  selectShirtOp.selected = true;
};
//When a theme is selected, show available color options only
designField.addEventListener('change', (event) => {
    if (event.target.value === "js puns") {
      //hide heart options
          document.querySelector('[value=tomato]').hidden= true;
          document.querySelector('[value=steelblue]').hidden= true;
          document.querySelector('[value=dimgrey]').hidden= true;
      //show puns options
          document.querySelector('[value=cornflowerblue]').hidden= false;
          document.querySelector('[value=darkslategrey]').hidden= false;
          document.querySelector('[value=gold]').hidden= false;
      //update the Color field to the first available color
          document.querySelector("[value='cornflowerblue']").selected=true;
    }else if(event.target.value === "heart js"){
      //hide pun options
          document.querySelector('[value=cornflowerblue]').hidden= true;
          document.querySelector('[value=darkslategrey]').hidden= true;
          document.querySelector('[value=gold]').hidden= true;
      //show heart options
          document.querySelector('[value=tomato]').hidden= false;
          document.querySelector('[value=steelblue]').hidden= false;
          document.querySelector('[value=dimgrey]').hidden= false;
      //update the Color field to the first available color
          document.querySelector("[value='tomato']").selected= true;
    }
});
//Activity Section
    //select the activities field and store in global var
const activitiesField = document.querySelector('.activities');
    //select all of the activity checkbox inputs and store in global variable
const checkboxes = document.querySelectorAll('.activities input');
    //declare variable cost=0 to act as total counter
let cost = 0;
    //create span element and assign its text content to "Total: + var cost"
let totalCostSpan = document.createElement('span');
totalCostSpan.textContent = "Total:" + " $" + cost;
    //append totalCost to activities section
document.querySelector('.activities').append(totalCostSpan);
  //Listening for changes in the activity Section
activitiesField.addEventListener('change', (event) => {
  let clicked = event.target;
  let clickedCost = parseInt(clicked.getAttribute('data-cost'));
  if (clicked.checked) {
    cost += clickedCost;
  }else{
    cost -= clickedCost;
  }
  totalCostSpan.textContent = "Total:" + " $" + cost;
  //disable conflicting activities
  let clickedDayTime = clicked.getAttribute('data-day-and-time');
  for(let i = 0; i<checkboxes.length; i++){
    let checkboxCurrent = checkboxes[i];
    if(checkboxCurrent.getAttribute('data-day-and-time')===clickedDayTime && checkboxCurrent !== clicked) {
      if(clicked.checked){
        checkboxCurrent.disabled=true;
      }else{
        checkboxCurrent.disabled=false;
      }
    }
  }
});
//Payment Section
  //hide the "select payment" option
document.querySelector('option[value="select method"]').hidden=true;
  //hide paypal and bitcoin options
document.querySelector('#paypal').hidden=true;
document.querySelector('#bitcoin').hidden=true;
  //select the credit card option on load
document.querySelector('#credit-card').selected=true;
  //get value of the payment select element and store in variable
const payment = document.getElementById('payment');
//Here I set the value of the payment drop down/select menu to credit card.
payment.value = 'credit card';
  /*if value of payment is equal to 'credit card',
  set credit card payment section to show, and hide the other 2 options
  repeat for bitcoin and paypal*/
payment.addEventListener('change', (event) => {
  if (event.target.value==='credit card'){
    document.querySelector('#paypal').hidden=true;
    document.querySelector('#bitcoin').hidden=true;
    document.querySelector('#credit-card').hidden=false;
  }else if(event.target.value==='bitcoin'){
    document.querySelector('#paypal').hidden=true;
    document.querySelector('#credit-card').hidden=true;
    document.querySelector('#bitcoin').hidden=false;
  }else if(event.target.value==='paypal'){
    document.querySelector('#bitcoin').hidden=true;
    document.querySelector('#credit-card').hidden=true;
    document.querySelector('#paypal').hidden=false;
}});
//Form Validation and Validation Messages
  //Name
    //select #name and declare name variable
const name = document.querySelector('#name');
    //create and append an error message to the DOM
const nameError = document.createElement('span');
nameError.textContent = "Please enter your name";
document.querySelector('label[for="name"]').append(nameError);
nameError.classList.add('error');
    //set the error message .hidden=true initially
nameError.hidden=true;
    //validation:  the name field can't be blank
const nameValidator = () => {
  let nameVal = name.value;
  if (nameVal.length > 0) {
    //show/hide warning and chage border colors
    name.style.borderColor = "white";
    nameError.hidden=true;
    return true;
  }else{
    name.style.borderColor = "red";
    nameError.hidden=false;
    return false;
  }
}
  //email
    //select #mail and declare email variable
const email = document.querySelector('#mail');
    //regex for testing email
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //create and append an error message to the DOM
const emailError = document.createElement('span');
emailError.textContent = "Please provide a valid email address";
document.querySelector('label[for="mail"]').append(emailError);
emailError.classList.add('error');
emailError.hidden=true;
    //email validator function
const emailValidator = () => {
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
}
  //activity section
const activitiesError = document.createElement('span');
activitiesError.textContent = "Please select at least one activity";
document.querySelector('.activities legend').append(activitiesError);
activitiesError.classList.add('error');
activitiesError.hidden=true;
    //activities validator function
const activitiesValidator = () => {
  let activitiesChecked=0;
  const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
  for(let i=0; i<allCheckboxes.length; i++){
    if(allCheckboxes[i].checked){
      activitiesChecked += 1;
    }}
    if(activitiesChecked>0){
      activitiesError.hidden=true;
      return true;
    }else{
      activitiesError.hidden=false;
      return false;
    }
}
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

//Extra Credit
    //Hide the color label and select menu until a design has been selected
const colorSection = document.querySelector("#colors-js-puns")
colorSection.hidden=true;
designField.addEventListener('change', (e) => {
  if(event.target.value==="js puns" || event.target.value==="heart js"){
    colorSection.hidden=false;
  }else{
    colorSection.hidden=true;
  }
});
