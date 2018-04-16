// Receiving Functions as Input (Callback style)

function thisRunsRegularly() {
  console.log("This happens every 1000ms");
}

// setInterval(thisRunsRegularly, 1000);

// setTimeout(function() {
//   console.log("I was delayed by 2000ms");
// }, 2000);

// repeat
// Create a function that receives a callback
// And runs it X amount of times

function repeat(numTimes, cb) {
  for (var i = 1; i <= numTimes; i += 1) {
    cb(i);
  }
}

function myCallback(i) {
  console.log("My callback was executed", i);
}

// repeat(5, myCallback);

// repeat(10, function(enemyCount) {
//   console.log("A new enemy was created", enemyCount);
// });

// forEach function that receives an array and a callback
// That callback should be provided with:
//  item
//  index
//  entireCollection

function forEach(coll, iterator) {
  for (var i = 0; i < coll.length; i += 1) {
    var item = coll[i];
    iterator(item, i, coll);
  }
}

var letters = ["a", "b", "c", "d", "e"];

function printLetter(currentItem, currentIndex, collection) {
  console.log(currentItem, currentIndex, collection);
}

forEach(letters, printLetter);

forEach(["Groucho", "Harpo", "Chico"], function(brothersName) {
  console.log(`The current brother is ${brothersName}`);
});

console.clear();

function map(entireCollection, callbackFunction) {
  var mappedArray = [];
  for (var i = 0; i < entireCollection.length; i += 1) {
    var currentValue = entireCollection[i];
    var result = callbackFunction(currentValue);
    mappedArray.push(result);
  }
  console.log(mappedArray);
  return mappedArray;
}

map([1, 2, 3, 4, 5], function(num) {
  return num * 5;
});

console.clear();

// Return Functions as Output

function creator() {
  console.log("Creator was called");
  return function() {
    console.log("I am the returned function");
  };
}

var returnedFunc = creator();
returnedFunc();

function createGreeting(greeting) {
  return function(name) {
    console.log(greeting, name);
  };
}

var hi = createGreeting("Hi");
hi("JEJ");

var hello = createGreeting("Hello");
hello("Elmo");

function createPokemonCharacter(name) {
  return function() {
    console.log(`A new ${name} was created`);
  };
}

var createPikachu = createPokemonCharacter("Pikachu");
createPikachu();

var createJigglypuff = createPokemonCharacter("Jigglypuff");
createJigglypuff();

// 150
// Create image, Animate Image, Add to the player inventory, Save it to the database

// makeAdder
//   var addTen = makeAdder(10);
//   var addTwo = makeAdder(2);

// function createElement(tagName) {}

// h1();
// p();
// img();
