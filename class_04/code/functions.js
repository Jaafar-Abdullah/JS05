// Function Declaration - HOISTED
function doSomething() {
  console.log("This function was called");
}

// Function Expression
var logSomething = function() {
  console.log("The logSomething function was called");
};

// Squares the number five
function squareFive() {
  console.log(Math.pow(5, 2));
}

squareFive();

function virtualDice() {
  var num = Math.floor(Math.random() * 6) + 1;
  console.log(num);
}

virtualDice();
virtualDice(); // CMND + SHIFT + D

function seeArguments() {
  console.log(arguments);
}

// seeArguments(10, 25);

function greetPerson(name) {
  var message = "Hello " + name;
  console.log(message);
}

greetPerson("Jane");
greetPerson("Bill");

function addTogether(x, y) {
  console.log(x + y);
}

// addTogether();
// addTogether(4);
addTogether(4, 5);

// Create a squareNumber function
// Receive a piece of data to square
// Bonus: Create your own "Math.pow" function
// Called "pow"
// Receives a number and a power

function squareNumber(numOne) {
  console.log(numOne * numOne);
}

squareNumber(15);

function pow(base, exponent) {
  var result = 1;
  for (var i = 1; i <= exponent; i += 1) {
    result *= base;
  }
  console.log(result);
}

function multiplyTogether(firstNum, secondNum) {
  console.log(firstNum * secondNum);
}

multiplyTogether(4, 5);

var x = 10;
multiplyTogether(x, 6);

// Create a greet person
// Receive a starting message (e.g. Hello, Hi)
// Receive a name
// Log out those two things combined
// Hello, Jane
// Hi, Greg

function greet(start, name) {
  var message = start + ", " + name;
  console.log(message);
}

greet("Hello", "Greg");
greet("Howdy", "Partner");

function changeTheme(themeChoice) {
  if (themeChoice === "light") {
    console.log("Background white, text black");
  } else {
    console.log("Background black, text white");
  }
}

changeTheme("light");
changeTheme("dark");

// showOrHideMenu
// Receive a boolean called isOpen
// If the menu is open
// Log out "close the menu"
// Otherwise
// Log out "show the menu"

function showOrHideMenu(isOpen) {
  if (isOpen) {
    console.log("Close the menu");
  } else {
    console.log("Open the menu");
  }
}

showOrHideMenu(false);
