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
