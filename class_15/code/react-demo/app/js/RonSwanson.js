const React = require("react");

class RonSwanson extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, data: null };
    fetch("//ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data[0] });
      });
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong...</div>;
    }
    if (this.state.data) {
      return <div>Here is your joke: {this.state.data}</div>;
    }
    return <div>Loading...</div>;
  }
}

module.exports = RonSwanson;
