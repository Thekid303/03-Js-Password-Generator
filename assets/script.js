// Assignment Code
var generateBtn = document.querySelector('#generate');

//function vars 
function generatePassword() {
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var upper = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
  var number = '1234567890';
  var special = '~!@#$%^&*()_+{}:?><;.,';
  var password = '';
  var possChars = '';

  // determine the length of the password.
  var pwLength = prompt('Please indicate a password length between 8 and 128.')

  // Verify the password length entered meets the length requirements
  if (pwLength >= 8 && pwLength <= 128) {
    console.log(pwLength)
  }



  // if password length provided is less than the min or more than the max will return an error 
  //password length must be met before user can select password
  else {
    alert('Your password must be at least 8, but no more than 128, characters.')
    return '';

  }




  // choose if user wants lower case letters
  var chooseLower = confirm('Do you want to use lower case letters?')
  console.log(chooseLower)

  // choose if user wants upper case letters
  var chooseUpper = confirm('Do you want to use upper case letters?')
  console.log(chooseUpper)

  // choose if user wants numbers
  var chooseNumber = confirm('Do you want to use numbers?')
  console.log(chooseNumber)

  // choose if user wants special characters
  var chooseSpecial = confirm('Do you want to use special characters?')
  console.log(chooseSpecial)





  // validate at least one criteria was selected random character selection based on password length if lower case letters are wanted, randomly select a letter from the lower array

  if (chooseLower) {
    possChars += lower
  }

  // if upper case letters are wanted, randomly select a letter from the upper array
  if (chooseUpper) {
    possChars += upper
  }

  // if numbers are wanted, randomly select a number from the numbers array
  if (chooseNumber) {
    possChars += number
  }

  // if special characters are wanted, randomly select a character from the special array
  if (chooseSpecial) {
    possChars += special
  }



  // will stop and return an alert if there are no character types selected
  if (
    !chooseLower && !chooseCapUpper && !chooseNumber && !chooseSpecial
  ) {
    return alert('Please select at least one criteria!');

  }


  // selects the characters that will be in the password from the characters that were pulled into possChars
  // will loop through selecting characters at random until there are enough characters to fullfil the password length requirement

  for (let i = 0; i < pwLength; i++) {

    password += possChars[Math.floor(Math.random() * possChars.length)];
    console.log(password)
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);