var ordinals = ["zeroth", "first", "second", "third", "fourth", "fifth"];

console.log(ordinals[0]);

// Count from 0 to 3 with a loop
// for (var count = 0; count <= 4; count += 1) {
//   var currentOrdinal = ordinals[count];
//   console.log(currentOrdinal);
// }

// Print every ordinal in the array called ordinals
// Define my loop:
// Starting Point - 0
// Step - +1
// Ending Point - Use the length of the array

for (var index = 0; index < ordinals.length; index += 1) {
  var ordinal = ordinals[index];
  console.log("current ordinal", ordinal);
}
