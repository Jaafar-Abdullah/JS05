const React = require("react");
const ReactDOM = require("react-dom");

// const hello = <h1>Hello World</h1>;
// const hello = React.createElement("h1", {}, "Hello World");

// Needs to be named with UpperCamelCase
// Needs a render method that returns JSX
class HelloWorld extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

class Greeting extends React.Component {
  render() {
    return <h1>Welcome to our app</h1>;
  }
}

class HelloUser extends React.Component {
  render() {
    console.log(this); // Represents an instance of HelloUser
    const name = this.props.name;
    return <h1>Hello {name}</h1>;
  }
}

// FavouriteNumber
// My favourite number is: _______
// this.props.num

class FavouriteNumber extends React.Component {
  render() {
    return <h2>My favourite number is {this.props.num}</h2>;
  }
}

ReactDOM.render(
  <FavouriteNumber num="42" />, // This will call the render method for you!
  document.querySelector("#app")
);
