// if ( CONDITION ) {
//   CODE TO EXECUTE
// }

if (3 === 3) {
  console.log("Maths makes sense");
}

var favMovie = "Satantango";

if (favMovie === "Satantango") {
  console.log("I think that is a good choice");
}

var playerOneMove = "Rock";

// If playerOneMove is Scissors
// Print out "Player one played scissors"
if (playerOneMove === "Scissors") {
  console.log("Player one played scissors");
}

// Store a computerNumber
// Store a userGuess
// IF computerNumber is less than userGuess
// Print out "The number is lower"
var computerNumber = 10;
var userGuess = 15;

if (computerNumber < userGuess) {
  console.log("The number is lower");
}

// if ( CONDITION ) {
//   CODE TO EXECUTE IF TRUE
// } else {
//   CODE TO EXECUTE IF FALSE
// }

// Store a user number
// If the user number is greater than 0
// Print out "It's a positive number"
// Otherwise
// Print out "It's a negative number"

var userNumber = 42;
if (userNumber > 0) {
  console.log("It's a positive number");
} else {
  console.log("It's a negative number");
}

// Store the user course
// If userCourse is JSD
// You are learning JavaScript
// Else,
// We don't know what you are learning. Might be blockchain
var userCourse = "JSD";
if (userCourse === "JSD") {
  console.log("You are learning JavaScript");
} else {
  console.log("We aren't sure");
}

var vehicle = "Scooter";

if (vehicle === "Car") {
  console.log("You are in a car");
} else if (vehicle === "Motorbike") {
  console.log("You are riding a motorbike");
} else {
  console.log("We don't know what you are driving");
}
