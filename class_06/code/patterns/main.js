// Select - DOM traversal
var h1 = document.querySelector("h1");

// Manipulate
h1.innerText = "Updated with JS";
h1.style.color = "hotpink";
h1.style.textDecoration = "underline";
h1.style.fontSize = "28px";

// Admire...

function addLorem() {
  // Create - Create a paragraph DOM node
  var pTag = document.createElement("p");

  // Manipulate - Update the text, change styles etc.
  pTag.innerText = "lorem ipsum lakns lkn lkn lk nlkn";
  pTag.style.color = "rebeccapurple";
  pTag.style.textDecoration = "line-through";

  // Inject - Add it to the page
  document.body.appendChild(pTag);
}

for (var i = 1; i <= 100; i += 1) {
  addLorem();
}

function addImage() {
  // Create
  var img = document.createElement("img");
  // Manipulate
  var width = 400;
  var height = 500;
  var url = "https://picsum.photos/" + width + "/" + height;
  img.setAttribute("src", url);
  // Inject
  document.body.appendChild(img);
}

addImage();
