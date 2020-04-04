/*
John Layher's JavaScript Project 3
*/

//Put the first field in the focus state
document.getElementById('name').focus();

//Add an "Other" option to Job Roles Section(in HTML) and Hide it on Page Load
const otherTextBox = document.getElementById('other-title');
otherTextBox.style.display= "none";
//Show the "Other" text field when "other" is selected in the Job Roles menu
const jobSelect = document.getElementById('title');
jobSelect.addEventListener('change', (event) => {
  if (event.target.value === "other") {
    otherTextBox.style.display = 'block';
  } else {
    otherTextBox.style.display = 'none';
  }
});


//T-Shirt Section


//Activity Section
  //Creating an element to display total activity cost
  //Listening for changes in the activity Section
  //Updating andDisplaying the total activity cost
  //Disabling Conflicting Events


//Payment Section



//Form Validation and Validation Messages


//Extra Credit
  //T-Shirt Section
    //Hide the color label and select menu until a design has been selected
  //Conditional Ettor Messages
    //Program one of your error messages so that more info is provided depending on the error
  //Real-Time Error messages
    //Rather than an error message on submit, check for errors as they are being input
