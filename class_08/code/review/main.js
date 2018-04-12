var todos = ["Todo 1", "Todo 2", "Eat mango chicken", "Eat Mikaela's pasta"];

var listItems = todos.reduce(function(currentHTML, todo) {
  return currentHTML + `<li>${todo}</li>`;
}, "");

var unorderedList = `<ul>${listItems}</ul>`;

document.body.innerHTML += unorderedList;
