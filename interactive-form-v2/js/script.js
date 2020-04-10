/*
John Layher's JavaScript Project 3
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

  //Onload, update "Design" and "Color" fields so the user selects a theme before color
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

  //create separate validation functions for each of the required form fields/sections
    //creating each validator function
      /*before starting, create and append an element to the DOM near the
      specific input or section, and give it some friendly error message.
      */
      //use a conditional to check if input value meets the required regex
        //if criteria are NOT met
          //set newDOMelement.hidden=false
          //return false
        //if criteria ARE met,
          //set newDOMelement.hidden=true
          //return true

  //Name
    //select #name and declare name variable
const name = document.querySelector('#name');
    //create and append an error message to the DOM
const nameError = document.createElement('span');
nameError.textContent = "Please enter your name";
document.querySelector('label[for="name"]').append(nameError);
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

    //select #name and declare name variable
const email = document.querySelector('#mail');
    //regex for testing email
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //create and append an error message to the DOM
const emailError = document.createElement('span');
emailError.textContent = "Please provide a valid email address";
document.querySelector('label[for="mail"]').append(emailError);
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
    //user must select AT LEAST 1 checkbox in the form
    //activitiesField already declared
    //create and append an error message to the DOM
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

//creating each validator function
  /*before starting, create and append an element to the DOM near the
  specific input or section, and give it some friendly error message.
  */
  //use a conditional to check if input value meets the required regex
    //if criteria are NOT met
      //set newDOMelement.hidden=false
      //return false
    //if criteria ARE met,
      //set newDOMelement.hidden=true
      //return true




  //IF CREDIT CARD SELECTED
    //Credit Card Number
      //only accept a number between 13-16 digits

    //Zip Code
      //only accept a 5-digit Number

    //CVV (only validated if payment method is 'credit card')
      //should only accept a number 3 digits long

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
});







//Extra Credit
  //T-Shirt Section
    //Hide the color label and select menu until a design has been selected
  //Conditional Error Messages
    //Program one of your error messages so that more info is provided depending on the error
  //Real-Time Error messages
    //Rather than an error message on submit, check for errors as they are being input
