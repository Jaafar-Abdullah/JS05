// Working with APIs
// Figure out:
//    The Base URL
//    Path
//    HTTP Method
//    Data Type
//    Parameters

var baseURL = "http://ron-swanson-quotes.herokuapp.com/";
var path = "v2/quotes";
var url = baseURL + path;

function getRonQuote() {
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var quote = data[0];
      // Create a new paragraph tag
      var pTag = document.createElement("p");
      // Add the quote as the text in that tag
      pTag.innerText = quote;
      // Add it to the end of the div with id output
      var targetDiv = document.querySelector("#output");
      targetDiv.appendChild(pTag);

      setTimeout(getRonQuote, 2000);
    });
}

getRonQuote();
