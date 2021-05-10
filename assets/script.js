// Assignment code here

//declare arrays that contain the range of possible characters in a password
const loweralphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperalphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const special = ["\u0020", "\u0021", "\u0022", "\u0023", "\u0024", "\u0025", "\u0026", "\u0027", "\u0028", "\u0029", "\u002A", "\u002B", "\u002C", "\u002D", "\u002E", "\u002F", "\u003A", "\u003B", "\u003C", "\u003D", "\u003E", "\u003F", "\u0040", "\u005B", "\u005C", "\u005D", "\u005E", "\u005F", "\u0060", "\u007B", "\u007C", "\u007D", "\u007E"];

//console.log(loweralphabet.length); = 26
//console.log(upperalphabet.length); = 26
//console.log(numbers.length); = 10
//console.log(special.length); = 33


//make a value lowercase
var makeLowerCase = function (entered) {
  var lowerCaseOfInput = entered.toLowerCase();
  return lowerCaseOfInput;
};



//function to pick character types
var characterType = function () {
  //Character Type Alert
  window.alert("Please select from the following prompts the charater types this password must posses. (Please select at least one character type).");
  
  //initiate counter to ensure at least one of the options is chosen
  var characterCounter = 0;

  //Lowercase
  var lowerCase = function () {
    var lowerCaseInput = window.prompt(
      "Should the password contain lowercase characters? Enter YES or NO"
    );
    lowerCaseInput = makeLowerCase(lowerCaseInput);
    //What to do if the password should include a lowercase
    if (lowerCaseInput === "yes") {
      console.log("made it to lowercase");
      characterCounter++;
      return true;
    }
    else if (lowerCaseInput === "no") {
      return false;
    }
    else {
      return lowerCase();
    }
  };

  //Uppercase 
  var upperCase = function () {
    var upperCaseInput = window.prompt(
      "Should the password contain uppercase characters? Enter YES or NO"
    );
    upperCaseInput = makeLowerCase(upperCaseInput);
    //What to do if the password should include an uppercase
    if (upperCaseInput === "yes") {
      console.log("made it to uppercase");
      characterCounter++;
      return true;
    }
    else if (upperCaseInput === "no") {
      return false;
    }
    else {
      return upperCase();
    }
  };

  

  //Numeric 
  var numeric = function () {
    var numericInput = window.prompt(
      "Should the password contain numeric characters? Enter YES or NO"
    );
    numericInput = makeLowerCase(numericInput);
    //What to do if the password should include a numeric character
    if (numericInput === "yes") {
      console.log("made it to numeric");
      characterCounter++;
      return true;
    }
    else if (numericInput === "no") {
      return false;
    }
    else {
      return numeric();
    }
  };

  
  //Special characters
  var specialCharacter = function () {
    var specialCharacterInput = window.prompt(
      "Should the password contain special characters? Enter YES or NO"
    );
    specialCharacterInput = makeLowerCase(specialCharacterInput);
    //What to do if the password should include a numeric character
    if (specialCharacterInput === "yes") {
      console.log("made it to specialCharacter");
      characterCounter++;
      return true;
    }
    else if (specialCharacterInput === "no") {
      return false;
    }
    else {
      return specialCharacter();
    }
  };

  lowerCase();
  upperCase();
  numeric(); 
  specialCharacter();

  //check to make sure at least one character requirement was chosen
  if (characterCounter === 0) {
    window.alert("No character type was chosen");
    return characterType();
  }


};



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
    characterType();

  }

  //return the password

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




