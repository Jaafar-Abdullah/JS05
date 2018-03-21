// Count from 0 to 5

for (var i = 0; i <= 5; i += 1) {
  console.log(i);
}

// Count from 10 to 4
// Every two numbers

for (var count = 10; count >= 4; count -= 2) {
  console.log(count);
}

// Count from 1 to 100
// But as soon as I see the number 12
// I want to stop the loop

for (var count = 1; count <= 100; count += 1) {
  // IF count is 12
  // Log Stop the loop
  if (count === 12) {
    console.log("Stop the loop!");
    break;
  }
  console.log(count);
}
