// DOM Elements
const resultEl = document.getElementById("result");
const generateEl = document.getElementById("generate");

const randomFunction = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Define variables
var includeLower;
var includeNumber;
var includeSymbol;
var includeUpper;
var inputLength;
var array_of_functions = [];

// When Generate Button is clicked...
generateEl.addEventListener("click", () => {
  passwordConditions()
  generatePassword()
});

// Prompts that provide conditions for generated password
function passwordConditions() {
  includeUpper = confirm("Do you want to include Uppercase Letters?");
  includeLower = confirm("Do you want to include Lowercase Letters?");
  includeNumber = confirm("Do you want to include Numbers?");
  includeSymbol = confirm("Do you want to include Symbols?");
  passwordLengthPrompt()
};

// Final prompt - leads to 
function passwordLengthPrompt() {
  inputLength = prompt(
    "How many characters do you want your password to be?",
    "Enter a number between 8 and 128"
  );

  // inputLength must be between 8 and 128. if not ask again
  if (inputLength <= 7 || inputLength >= 129) {
    passwordLengthPrompt()
  }
};

// Which functions to include based on user responses to prompt
function charactersToInclude() {
  if (includeUpper) {
    array_of_functions.push(getRandomUpper)
  }
  if (includeLower) {
    array_of_functions.push(getRandomLower)
  }
  if (includeNumber) {
    array_of_functions.push(getRandomNumber)
  }
  if (includeSymbol) {
    array_of_functions.push(getRandomSymbol)
  }
};

// Generate password
function generatePassword() {
  let generatedPassword = "";

  charactersToInclude()

  for (i = 0; i <= inputLength; i++) {
    generatedPassword += array_of_functions[Math.floor(Math.random() * array_of_functions.length)]();
  }

  array_of_functions = []

  console.log(generatedPassword)

  resultEl.innerHTML = generatedPassword;
}

// Generator Functions
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()[]{}?/=+-<>";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
