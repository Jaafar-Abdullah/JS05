// If the user's age is over 18
//   Log out Go purchase something
// Otherwise
//   Go to mylittlepony.com

var userAge = 16;
var isHacker = false;

if (userAge >= 18 || isHacker) {
  console.log("You can view the site");
} else {
  console.log("Visit mylittlepony.com");
}

// IF the user's name === Blade && his job is Teacher
// Log out that is a good choice
// ELSE IF the user's name is Blade AND his job is Landscape Gardener
// Log out that isn't a great choice for you
// ELSE
// Log out we aren't sure

var userName = "Blade";
var job = "Landscape Gardener";

if (userName === "Blade" && job === "Teacher") {
  console.log("That is a great choice for you");
} else if (userName === "Blade" && job === "Landscape Gardener") {
  console.log("That isn't a great choice for you");
} else {
  console.log("We aren't sure");
}
