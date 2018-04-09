var basicStr = `Hello World`;
var noEscape = `Jane's bag`;

var favNumber = 42;
var myFav = `My favourite number is ${favNumber}`;

var myMathsMessage = `4 * 2 = ${4 * 2}`;

var username = "kookslams";
var postCount = 673;
var description = "Curated kook slammage";

var htmlMarkup = `
  <h1>${username}</h1>
  <p>${description}</p>
  <p>Post Count: ${postCount}</p>
`;

document.body.innerHTML += htmlMarkup;
