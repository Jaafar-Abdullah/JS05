// Store language
// If language is HTML or CSS
// You are talking about a front end language
// Otherwise
// It could be a back end language
var language = "CSS";
if (language === "HTML" || language === "CSS") {
  console.log("You are talking about the front end");
} else {
  console.log("It could be a back end language");
}

var userNameExists = true;
var appropriatePassword = true;

if (userNameExists === true && appropriatePassword === true) {
  console.log("You are logged in");
} else {
  console.log("Something went wrong");
}

// Store hasUserAccount
// If the user doesn't have a user account
// You can create an account
// Otherwise
// You already have an account

var hasUserAccount = false;

if (!hasUserAccount === true) {
  console.log("You can create an account");
} else {
  console.log("You already have an account");
}
