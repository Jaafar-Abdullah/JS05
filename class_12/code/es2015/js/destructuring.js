const PERSON = {
  firstName: "Bill",
  lastName: "Murray",
  email: "bill@ga.co"
};

// const firstName = PERSON.firstName;
// const lastName = PERSON.lastName;
// const email = PERSON.email;

const { firstName, lastName, email } = PERSON;
console.log(firstName, lastName, email);

const explorer = {
  first: "Jacques",
  last: "Cousteau"
};

// Create two new variables, one called first and one called last
const { first, last } = explorer;
console.log(first, last);

const triangle = {
  sideOne: 3,
  sideTwo: 4,
  sideThree: 5
};

const { sideThree: hypotenuse } = triangle;
console.log(hypotenuse);

function calculateArea({ width, height }) {
  console.log(width * height);
}

calculateArea({ width: 20, height: 40 });

const details = ["kookslams", "kookslams@gmail.com", 1000000];
// Create three variables
// One called username, one called email, one called followers

const [username, emailAddress, followers] = details;
// const username = details[0];
// const emailAddress = details[1];
// const followers = details[2];

console.log(username, emailAddress, followers);
