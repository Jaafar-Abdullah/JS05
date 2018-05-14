const React = require("react");
const ReactDOM = require("react-dom");

const App = require("./App");

ReactDOM.render(<App />, document.querySelector("#app"));

// class Hello extends React.Component {
//   constructor(props) {
//     super(props); // Inherit React.Component functionality
//     // Typically you will set this.state here as well
//     // Create copies of event handlers and make sure that `this` works
//     this.boundHandleClick = this.handleClick.bind(this);
//     this.handleRightClick = this.handleRightClick.bind(this);
//     this.handleMouseOver = this.handleMouseOver.bind(this);
//     // Create a copy of this.handleRightClick
//     //    Don't run execute immediately
//     // When that copy is executed
//     //    Make sure that the keyword `this` refers to the instance
//     //    So that we can refer to this.props, this.state etc.
//   }
//   handleMouseOver() {
//     // this refers to the instance of the component
//     const { name } = this.props;
//     alert(`You moused over ${name}`);
//   }
//   handleRightClick() {
//     console.log(this);
//   }
//   handleClick() {
//     console.log(this);
//   }
//   render() {
//     console.log(this); // => References an instance of Hello
//     return (
//       <div>
//         <h1
//           onClick={this.boundHandleClick}
//           onContextMenu={this.handleRightClick}
//           onMouseEnter={this.handleMouseOver}
//         >
//           Hello {this.props.name}
//         </h1>
//       </div>
//     );
//   }
// }

// // When the user mouses over Hello
// //  Log: You moved your mouse over _____________
// //  NEED TO USE PROPS ^

// ReactDOM.render(<Hello name="Serge" />, document.querySelector("#app"));
