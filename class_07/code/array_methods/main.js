var letters = ["a", "b", "c", "d", "e"];

letters.forEach(function(letter, index, entireArray) {
  var message = `
    Current Letter: ${letter}.
    Index: ${index}.
    Entire Array: ${entireArray}.
  `;
  console.log(message);
});

var numbers = [1241, 1512, 42, 19, 0.5];

function displayNum(currentNum, i) {
  var html = `<p>Item at index ${i} is ${currentNum}</p>`;
  document.body.innerHTML += html;
}

numbers.forEach(displayNum);

// Filter

var nums = [1, 2, 3, 4, 5, 6];

var odds = nums.filter(function(num) {
  return num % 2 === 1;
});

console.log(odds);

console.clear();

var marxBrothers = [
  { name: "Groucho", admin: true },
  { name: "Harpo", admin: false },
  { name: "Gummo", admin: false }
];

var admins = marxBrothers.filter(function(brother) {
  return brother.admin === true;
});

console.log(admins);

var words = ["banana", "MANGO", "Grapes", "Custard Apple", "CHICKEN"];

function isWordUpperCase(word) {
  return word === word.toUpperCase();
}

var allUpperCasedWords = words.filter(isWordUpperCase);

console.log(allUpperCasedWords);

console.clear();

// Map - Transforming every element in a collection into something else

var letters = ["a", "b", "c", "d", "e"];

var upperCasedLetters = letters.map(function(letter) {
  return letter.toUpperCase();
});

console.log(upperCasedLetters);

var nums = [1, 2, 3, 4, 5];

var numsByFive = nums.map(function(number) {
  return number * 5;
});

console.log(numsByFive);

console.time("Map");

var todos = [
  "Watch Satantango",
  "Go to a plant sale",
  "Stay silent",
  "Buy chicken"
];

todos
  .map(function(todo, index) {
    return `<p>#${index + 1}: ${todo}</p>`;
  })
  .forEach(function(markup) {
    document.body.innerHTML += markup;
  });

console.timeEnd("Map");

// console.clear();

// .reduce - Take a collection of data and reduce it to just one value
//   The other name is inject - injecting an operation between items in the collection

var myNumbers = [1, 2, 3, 4, 5, 6];

var sum = myNumbers.reduce(function(runningTotal, currentNum) {
  var message = `
    Running Total: ${runningTotal}.
    Current Number: ${currentNum}.
  `;
  // console.log(message);
  return runningTotal + currentNum;
}, 0);

// console.log(sum);

// console.clear();

var testScores = [76, 92, 48, 95, 100];

var totalScore = testScores.reduce(function(currentTotal, score) {
  var message = `
    Current Total: ${currentTotal}.
    Current Score: ${score};
    Next Current Total: ${currentTotal + score}.
  `;
  // console.log(message);
  return currentTotal + score;
}, 0);

var average = totalScore / testScores.length;

// console.log(`Average: ${average}`);

// console.clear();

console.time("Reduce");

var todos = [
  "Watch Satantango",
  "Go to a plant sale",
  "Stay silent",
  "Buy mango chicken"
];

var allHTML = todos.reduce(function(totalHTML, todo) {
  return totalHTML + `<li>${todo}</li>`;
}, 0);

document.body.innerHTML += `<ul>${allHTML}</ul>`;

console.timeEnd("Reduce");
