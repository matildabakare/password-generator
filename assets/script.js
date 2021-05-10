// Assignment code here
//Create a function "generatePassword()" that will execute the actions required 
var generatePassword = function () {

  //Prompt for password length
  var passwordLength = window.prompt(
    "What is the length of your password? (Enter a number between 8 and 128)"
  );
  //Make the prompt input an integer rather than a string
  passwordLength = parseInt(passwordLength);

  //Ensuring the password length entered is within the requirements
  if (!(passwordLength >= 8 && passwordLength <= 128)) {
    window.alert("You did not pick a valid option. Try again.");
    return generatePassword ();
  }

  else {
    //function
  }



};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




