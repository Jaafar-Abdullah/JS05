function square(x) {
  var result = x * x;
  return result;
}

var squareOfFour = square(4);
console.log(squareOfFour);

var squareOfTwelve = square(12);
console.log(squareOfTwelve);

console.log(square(16) + square(12));

var userOne = {
  password: "chicken"
};

var userTwo = {
  password: "zebra"
};

// Predicate Function - one that always returns a boolean
function isPasswordChicken(user) {
  if (user.password === "chicken") {
    return true;
  } else {
    return false;
  }
}

console.log(isPasswordChicken(userOne));

var users = [
  { username: "kookslams", admin: true },
  { username: "sydneyga", admin: true },
  { username: "ga_sydney", admin: false }
];

// Create an isAdmin predicate function
// Iterate through each of the users
// And call isAdmin on that user
// Console.log the result

function isAdmin(user) {
  return user.admin === true;
}

for (var i = 0; i < users.length; i += 1) {
  var currentUser = users[i];
  var isUserAdmin = isAdmin(currentUser);
  console.log(isUserAdmin);
}

function cube(num) {
  return Math.pow(num, 3);
}

function double(num) {
  return num * 2;
}

var result = cube(double(5));
console.log(result);

function delayed() {
  console.log("I was delayed");
}

setTimeout(delayed, 1000);

var person = {
  firstName: "Jeff",
  sayHi: function() {
    console.log("Jeff says hi");
  }
};

person.sayHi();
