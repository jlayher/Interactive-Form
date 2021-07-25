/* Interactive-Form Project */

//Put the first field in the focus state
document.getElementById('name').focus();

/* Job Role Other Textbox */
//Select Other Textbox
const otherTextBox = document.getElementById('other-title');

//Hide the Text Box on Page Load
otherTextBox.hidden = true;

//Show the Other Textbox when "Other" is selected in the Job Roles menu
const jobSelect = document.getElementById('title');
jobSelect.addEventListener('change', (event) => {
  if (event.target.value === "other") {
    otherTextBox.hidden = false;
  } else {
    otherTextBox.hidden = true;
  }
});

/* T-Shirt Section */

//hide the "select theme" `option` in the design menu
document.querySelector("#design option").hidden=true;

//When a theme is selected, show available color options only
const designField = document.querySelector('#design');
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

//Hide the color label and select menu until a design has been selected
const colorSection = document.querySelector("#colors-js-puns")
colorSection.hidden=true;
designField.addEventListener('change', (e) => {
  if(e.target.value==="js puns" || e.target.value==="heart js"){
    colorSection.hidden=false;
  }else{
    colorSection.hidden=true;
  }
});

/* Activity Section */

//select the activities field and store in variable
const activitiesField = document.querySelector('.activities');
//select all of the activity checkbox inputs and store in variable
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
  //Calculate Cost
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

/* Payment Section */

//hide the "select payment" option
document.querySelector('option[value="select method"]').hidden=true;

//hide paypal and bitcoin divs
document.querySelector('#paypal').hidden=true;
document.querySelector('#bitcoin').hidden=true;

//select the credit card option on load
document.querySelector('#credit-card').selected=true;

//store the payment select element in a variable
const payment = document.getElementById('payment');

//set the value of the payment select menu to credit card
payment.value = 'credit card';
  
//if payment.value changes, update the divs' hidden props
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


/* Form Validation and Validation Messages */

  /*Name*/
//select #name and declare name variable
const nameInput = document.querySelector('#name');

//create and append an error message to the DOM
const nameError = document.createElement('span');
nameError.textContent = "Please enter your name";
document.querySelector('label[for="name"]').append(nameError);
nameError.classList.add('error');

//set the error message .hidden=true initially
nameError.hidden=true;

//validation:  the name field can't be blank
const nameValidator = () => {
  let nameVal = nameInput.value;
  if (nameVal.length > 0) {
    //show/hide warning and chage border colors
    nameInput.style.borderColor = "white";
    nameError.hidden=true;
    return true;
  }else{
    nameInput.style.borderColor = "red";
    nameError.hidden=false;
    return false;
  }
}

  /*Email*/
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
  /*Activity Section*/
const activitiesError = document.createElement('span');
activitiesError.textContent = "Please select at least one activity";
document.querySelector('.activities legend').append(activitiesError);
activitiesError.classList.add('error');
activitiesError.hidden=true;

//activities validator function
const activitiesValidator = () => {
  let activitiesChecked=0;
  for(let i=0; i<checkboxes.length; i++){
    if(checkboxes[i].checked){
      activitiesChecked += 1;
    }};
  if(activitiesChecked>0){
    activitiesError.hidden=true;
    return true;
  }else{
    activitiesError.hidden=false;
    return false;
  }
};
