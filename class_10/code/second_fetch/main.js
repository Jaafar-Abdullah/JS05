var baseURL = "https://randomuser.me/api";
var parameters = "?results=100";
var url = baseURL + parameters;

var httpOptions = {
  method: "GET"
};

function turnJSONIntoObject(response) {
  return response.json();
}

function handleData(data) {
  document.body.innerHTML = "<h1>Users Loaded</h1>";
  data.results.forEach(function(person) {
    console.log(person);
    var html = `
      <p>${person.name.first} ${person.name.last} - ${person.email}</p>
    `;
    document.body.innerHTML += html;
  });
}

function loading() {
  document.body.innerHTML = "Loading...";
}

loading();

fetch(url, httpOptions)
  .then(turnJSONIntoObject)
  .then(handleData);
