const React = require("react");

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }
  render() {
    return (
      <form>
        <input type="text" />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

module.exports = Search;
