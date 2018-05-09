const React = require("react");

class ChuckNorris extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
    this.makeRequest();
  }
  makeRequest() {
    fetch("//api.icndb.com/jokes/random?limitTo=[nerdy]")
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data.value.joke });
      });
  }
  render() {
    if (this.state.data) {
      // Loaded...
      return (
        <div>
          <h1>The Joke Has Loaded</h1>
          <p>{this.state.data}</p>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

module.exports = ChuckNorris;
