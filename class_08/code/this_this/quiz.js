console.log(this);
// Its the window object

var book = {
  author: "Brian Greene",
  read: function() {
    console.log(this);
  }
};

// Its the containing object
book.read();

var img = document.querySelector("img");
// Its whatever the target of the event was
img.addEventListener("click", function() {
  console.log(this);
});

function sayHi() {
  console.log(this);
}

// Its whatever is passed in to .call, .apply or .bind

sayHi.call(window);
sayHi.apply({ name: "Groucho" });

var gummo = { name: "Gummo" };
var gummosHi = sayHi.bind(gummo); //
gummosHi();

function Class(className) {
  this.className = className;
  console.log(this);
}

var jsCourse = new Class("JSD"); // Its a new empty object
