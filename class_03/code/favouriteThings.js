// Your top choices
// Create an array to hold your top five choices of something (dogs, books, presidents, whatever). If you choose movies, the right top choice is "Satantango".

// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var favThings = [
  "Gardening", // 0
  "Surfing", // 1
  "Coding", // 2
  "Photography", // 3
  "Making Horrible Music", // 4
  "Pretending I am playing the violin on the ferry", // 5
  "Karaoke"
];

for (var i = 0; i < favThings.length; i += 1) {
  var thing = favThings[i];
  console.log(thing);
}
