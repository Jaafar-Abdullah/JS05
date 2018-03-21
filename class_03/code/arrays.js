// Arrays
// - Ordered
// - Access data with an index (a number)
// - The index is zero-based

// Creating Arrays
var emptyArr = [];
var randomNumbers = [12, 42, 0.8, 16, 100, 48];
var weirdInstruments = [
  "Badgermin", // 0
  "The Great Stalacpipe Organ", // 1
  "Stylophone", // 2
  "Ondes Martenot", // 3
  "Sharpischord", // 4
  "Hydraulophone", // 5
  "Pyrophone" // 6
];
var weirdArray = [null, undefined, true, "", 10, []];

// Accessing Elements
// - Always use an index that starts at 0
var badgermin = weirdInstruments[0];
var stylophone = weirdInstruments[2];
var pyrophone = weirdInstruments[6];

console.log(pyrophone);
console.log(weirdInstruments.length);

var lastItem = weirdInstruments[weirdInstruments.length - 1];
console.log(lastItem);

// Reassigning Elements

weirdInstruments[0] = "Roli Seaboard";
console.log(weirdInstruments[0]);

weirdInstruments[3] = "Makey Makey Banana Piano";
console.log(weirdInstruments[3]);

// Adding Elements

var alpha = ["b", "c"];
// Adding to the end
alpha.push("d");
// Adding to the start
alpha.unshift("a");

console.log(alpha);

// Removing Elements
// Remove the last item
alpha.pop();
// Remove the first item
alpha.shift();

console.log(alpha);

// Finding Elements
var emails = ["groucho", "harpo", "zeppo", "gummo"];

var doesHarpoExist = emails.includes("harpo");
console.log("doesHarpoExist", doesHarpoExist);

var zeppoIndex = emails.indexOf("zeppo");
console.log("zeppoIndex", zeppoIndex);

var chicoIndex = emails.indexOf("chico"); // => -1
console.log("chicoIndex", chicoIndex);
