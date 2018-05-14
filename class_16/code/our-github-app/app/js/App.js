const React = require("react");

const Search = require("./Search");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profile: null, repos: null };
  }
  render() {
    console.log(this);
    return (
      <div>
        <h1>Our GitHub App</h1>
        <Search />
      </div>
    );
  }
}

module.exports = App;
