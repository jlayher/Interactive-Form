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

//Onload, update "Design" and "Color" fields so the user selects a theme before color
//declare global variables
const colorField = document.querySelector('#color');
const designField = document.querySelector('#design');
//hide the "select theme" `option` in the design menu
//may consider using .style.display = 'none'; instead of style.display='none'
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
