// QUESTION 1:

// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


// ANSWER:

const displayDayAndTime = () => {

  const today = new Date();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const day = daysOfWeek[today.getDay()];
  let hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds()

  const prepand = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 2;
  hours = hours ? hours : 12;
  let currentTime = `${hours}${prepand} : ${minutes} : ${seconds}`;

  return `Today is : ${day}. 
  Current time is : ${currentTime}`;
}  

console.log(displayDayAndTime())



// ========================================================



// QUESTION 2:

// 8. Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  


// ANSWER

const guessGame = () => {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  let guessNum = parseInt(prompt('Enter a guess number'));

  while (isNaN(guessNum)) {
     guessNum = parseInt(prompt('Please, enter a number'));
  }

  if (guessNum === randomNum) {
    alert(`Congratulations! Correct guess. The random number was ${randomNum}`);
  }else {
    alert(`Oops! incorrect guess. The random number was ${randomNum}`);
  }
}

console.log(guessGame());


// ========================================================


// QUESTION 3:

// 13. Write a JavaScript exercise to create a variable using a user-defined name.  

// ANSWER

const variableNameChecker = () => {
  const variableName = prompt("Please enter a variable name");
  let result;

  const variableNameFormatter = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;

  if (variableNameFormatter.test(variableName)) {
    console.log('Your variable passed the \'validity\' test!')
    result = `Your variable is: ${variableName}`;
  }else {
    console.log('Your variable name didn\'t pass the test');
  }
  return result;
}


// ========================================================

// QUESTION 4:

// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

// ANSWER  

const fahrenheitToCelsius = (f) => {
  const fToC = (f - 32) * 5/9;
  return `${f}\xB0F is ${fToC}\xB0C`;
};

const celsiusToFahrenheit = (c) => {
  const cToF = (c * 9/5) + 32;
  return `${c}\xB0C is ${cToF}\xB0F`;
}

const temperatureConverter = (temperatureValue, conversionType) => {
  if(conversionType === 'fahrenheit') {
    return fahrenheitToCelsius(temperatureValue);
  }else if (conversionType === 'celsius') {
    return celsiusToFahrenheit(temperatureValue);
  }else {
    alert('Invalid Conversion Type');
    console.log('Invalid Conversion Type');
  }
}

// ========================================================

// QUESTION 5:

// 12. Write a JavaScript program to get the website URL (loading page).  

// ANSWER 

window.addEventListener('load', () => {
  const websiteUrl = window.location.origin;
  return `The current loaded webiste\'s url is : ${websiteUrl}`;
})

// =======================================================

// QUESTION 6:

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).


// ANSWER

const calculator = () => {
  let firstNum = parseInt(prompt('Enter a number'));
  let operator = prompt('Enter a valid mathematical operator');
  let secondNum = parseInt(prompt('Enter the second number'));
  let result;

  if (operator === '+') {
    result = firstNum + secondNum;
  }else if (operator === '-') {
    result = firstNum - secondNum;
  }else if (operator === '/') {
    result = firstNum / secondNum;
  }else if (operator === '*') {
    result = firstNum * secondNum;
  }else if (operator === '%') {
    result = firstNum % secondNum;
  }else {
    alert("Invalid Operator");
    console.log("Invalid Operator");
  }
  return result;

// =======================================================

// QUESTION 7:

// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  

// ANSWER

const sumIntegers = (a, b) => {
  if (a !== b) {
    return a + b;
  }else {
    return (a + b) * 3;
  }
}

// =======================================================

// QUESTION 7:

// 21. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  

// ANSWER

const addingPy = string => {
  if (string.startsWith('Py')) {
    console.log('The string you provided starts with \'Py\', abeg follow instructions, make my code fit work.');
    return string;
  }else {
    return `Py${string}`;
  }
}

// =======================================================

// QUESTION 8:

// 22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

// ANSWER 

const removeCharacter = (str, position) => {
  const newStr = str.slice(0, position)  + str.slice(1 + position);
  return newStr;
}

console.log(removeCharacter('Hello World', 3))


// =======================================================


// QUESTION 9:

// 31. Write a JavaScript program to find the largest of three given integers. 

// ANSWER

const findMaxNum = (...args) => {
  const maxNum = Math.max(...args);
  return maxNum;
}

console.log(findMaxNum(1, 2, 3, 200, 450, 1000))  

// =======================================================

// QUESTION 10:

// 30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one. 

// ANSWER

const indexAppearance = str => {
  const searchWord = 'Script';
  let newStr;
  const indexOfSearchWord = str.indexOf(searchWord);

  if (str.includes(searchWord) && indexOfSearchWord === 4) {
    return newStr = str.replace(searchWord, '');
  }else if (str.includes(searchWord)) {
    return `This string contains the word '${searchWord}' but not at the 4th index`;
  }
}

console.log(indexAppearance('JavaScript'));