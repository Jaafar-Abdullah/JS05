// Creating Objects
var emptyObj = {};

var user = {
  firstName: "Bill",
  lastName: "Murray",
  email: "bill@ga.co",
  blogPosts: []
};

// Accessing Values

var firstName = user.firstName;
console.log(firstName);

var email = user.email;
console.log(email);

console.log(user.password);

var movie = {
  title: "Satantango",
  director: "Bela Tarr",
  duration: 432
};

console.log(movie.title, movie["title"]);

var key = "director";
console.log(movie[key]);

// Reassigning Values
movie.duration = 534;
console.log(movie);

// Adding Keys and Values
movie.language = "Hungarian";
console.log(movie);
