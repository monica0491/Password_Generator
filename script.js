// Assignment Code
var generateBtn = document.querySelector("#generate");

// When the button is clicked
// Grab the button from html
var button = document.querySelector("#generate");

//Add Event Listener
button.addEventListener("click", promptUser)

// Prompt user for inputs
function promptUser(){
  // prompt user for length and assign it ot variable
  var length = prompt('How many characters should your password be(8-128)?')
  // console.log(length);

  // prompt user for upper assign
  var isUpper = confirm('Do you want uppercase letters?');
  // console.log(isUpper)

  // prompt user for lower
  var isLower = confirm('Do you want lowercase letters?');

  // prompt user for spec
  var isSpec = confirm('Do you want special characters?');
   
  // create a string
  
  var textArea = document.getElementById("password");

  textArea.innerHTML = password;
  
  // generate a random letter for each char they want and add it to the string
  
  var characters = "abcdefghijklmnopqrstuvwyz";

  var upperCharacters = "ABCDEFGHLMNOPQRSTUVWXYZ";

  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  var password = '';

  var available = ''; 

  if (isLower == true){
    available += characters;
  }
  
  if (isUpper ==true){
    available += upperCharacters;
  }

  if (isSpec ==true){
    available += specialCharacters;
  }
  
  // console.log(isLower);

   for ( var i = 0; i < length; i++ ) {
     console.log(available);

     password += available.charAt(Math.floor(Math.random() * available.length));

    //  console.log(password);
     }

      document.getElementById("password").innerHTML = available;
     
    }
     
  
  
  // Display password to user


  // change the value innerhml to be your string











