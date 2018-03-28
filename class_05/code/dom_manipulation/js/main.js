// document.querySelector( "CSS SELECTOR" );
// Traverse the DOM and return the first DOM node that passes a given CSS Selector

var h1 = document.querySelector("h1");
var p = document.querySelector("p");
var li = document.querySelector("li");

console.log(h1, p, li);

var video = document.querySelector("video");

console.log(video);

var firstImage = document.querySelector("img");
console.log(firstImage);

// document.querySelectorAll("CSS SELECTOR");
// Returns all DOM nodes that match a CSS selector

var images = document.querySelectorAll("img");
var listItems = document.querySelectorAll("li");

console.log(images);
console.log(listItems);

var blockquotes = document.querySelectorAll("blockquote");

console.log(blockquotes);

// DOM Traversal
var list = document.querySelector("ul");

var children = list.children;
var parent = list.parentNode;
var siblings = list.parentNode.children;

// node.getAttribute("ATTRIBUTE NAME");
// Return the current attribute value

var firstImage = document.querySelector("img");
var src = firstImage.getAttribute("src");
var alt = firstImage.getAttribute("alt");
console.log(src, alt);

// Find the a tag
// Log out the href attribute
var anchor = document.querySelector("a");
var href = anchor.getAttribute("href");

// node.setAttribute("ATTR NAME", "DESIRED ATTR VALUE");

// Select the first image
// Change the src attribute to http://placepuppy.net/300/300
// Change the alt attribute to "A picture of a puppy"
// Add the title attribute and set it to "A puppy"

var firstImage = document.querySelector("img");
firstImage.setAttribute("src", "http://placepuppy.net/300/300");
firstImage.setAttribute("alt", "A picture of a puppy");
firstImage.setAttribute("title", "A puppy");

// Accessing the current HTML
// node.innerText OR node.innerHTML

var h1 = document.querySelector("h1");
console.log(h1.innerText);

var ul = document.querySelector("ul");
console.log(ul.innerHTML);

// Change the current HTML
// Re-assign node.innerText OR node.innerHTML

var pTag = document.querySelector("p");
pTag.innerText = "Updated with JS";

var body = document.body;
body.innerHTML += "<h2>Added with JS</h2>";

var aTag = document.querySelector("a");
aTag.setAttribute("href", "http://askjeeves.com");
aTag.innerText = "Ask Jeeves!";

// Getting User Input

var input = document.querySelector("input");
var currentValue = input.value;

// Accessing current styles
// getComputedStyle( DOM NODE );

var h1 = document.querySelector("h1");
var headingStylez = getComputedStyle(h1);
var width = headingStylez.width;
var fontSize = headingStylez.fontSize;
console.log(width, fontSize);

// Get the a tag's text-decoration, border and color
// and log them out
var aTag = document.querySelector("a");
var anchorStyles = getComputedStyle(aTag);

console.log(
  anchorStyles.textDecoration,
  anchorStyles.border,
  anchorStyles.color
);

// Set CSS styles with JS
// node.style.fontSize = ...

var h1 = document.querySelector("h1");
h1.style.textDecoration = "underline";
h1.style.fontSize = "50px";

// Go find the a tag
// Set the color to be red
// Add an underline
// Set the font-family to be "monospace"
var aTag = document.querySelector("a");
aTag.style.color = "red";
aTag.style.textDecoration = "underline";
aTag.style.fontFamily = "monospace";

// Creating DOM nodes

var newParagraph = document.createElement("p");

newParagraph.innerText = "Created with JS";
newParagraph.style.textTransform = "uppercase";
newParagraph.style.color = "chartreuse";

document.body.appendChild(newParagraph);

// Events with JavaScript
// - Event Type (e.g. click, hover, scroll)
// - Event Target (a DOM node)
// - Callback Function (a function)

var eventType = "click";
var button = document.querySelector("button");

function buttonClicked() {
  document.body.style.backgroundColor = "#16161d";
}

button.addEventListener(eventType, buttonClicked);
