import React from "react";
import ReactDOM from "react-dom";

// here is a React counter class component ,
//that updates the document title right
//after React makes changes to the DOM
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  //we have to duplicate the code between these two lifecycle methods in class.

  //This is because in many cases we want to perform the same side effect,
  //regardless of whether the component just mounted, or if it has been updated.
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    //document.title = `You clicked ${this.state.count} times`;
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);
