// Global Binding (Default) - window

console.log(this);

function sayHi() {
  console.log(this);
}

sayHi();

// Event Binding - whatever was being interacted with

var bill = document.querySelector("img");

function onImageClick() {
  console.log(this);
  this.style.border = "10px solid black";
}

bill.addEventListener("click", onImageClick);
document.querySelector(".cage").addEventListener("click", onImageClick);
document.querySelector(".steve").addEventListener("click", onImageClick);

var input = document.querySelector("input");

function onKeyPress() {
  console.log(this.value);
}

input.addEventListener("keypress", onKeyPress);

console.clear();

// Implicit Binding - the method was called on _______

var person = {
  name: "Serge",
  sayHello: function() {
    // console.log(this);
    console.log(`${this.name} says hi`);
  }
};

person.sayHello(); // Call-site

var bill = {
  firstName: "Bill",
  lastName: "Murray",
  displayFullName: function() {
    var fullname = `${this.firstName} ${this.lastName}`;
    console.log(fullname);
  }
};

bill.displayFullName();

// Explicit binding - this refers to whatever you passed in

function sayHello() {
  var greeting = `${this.name} says hi`;
  console.log(greeting);
}

var groucho = { name: "Groucho" };
var harpo = { name: "Harpo" };

sayHello.call(groucho); // groucho === this
sayHello.call(harpo); // harpo === this
sayHello.call({ name: "Gummo" });

sayHello.apply(groucho); // groucho === this

console.clear();

var gill = { name: "Gill" };
var gazza = { name: "Gazza" };
var hazza = { name: "Hazza" };

var sayHelloGill = sayHello.bind(gill);
sayHelloGill();

var gazzaSayHi = sayHello.bind(gazza);
gazzaSayHi();

// new Binding - A new empty object that is implicitly returned

function Person(name, username, email) {
  this.name = name;
  this.username = username;
  this.email = email;
  // sayHi function - Bill says hi, Greg says hi
  this.sayHi = function() {
    var message = `${this.name} says hi!`;
    console.log(message);
  };
  console.log(this);
}

var bill = new Person("Bill", "billy", "bill@ga.co");
bill.sayHi();

var greg = new Person("Greg", "greg", "greg@ga.co");
greg.sayHi();

function Beer(brand, capacity) {
  // this = {};
  this.brand = brand;
  this.capacity = capacity;
  this.drink = function() {
    var message = `Someone is drinking a ${this.capacity} ${this.brand}`;
    console.log(message);
    // "Someone is drinking a 300ml VB"
    // "Someone is drinking a 370ml Carlton"
  };
  // return this;
}

var vb = new Beer("VB", "300ml");
vb.drink();

var carlton = new Beer("Carlton", "370ml");
carlton.drink();
