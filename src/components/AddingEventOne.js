import React, { Component } from "react";

class AddingEventOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, welcom to React!",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      message: "You clicked the button!",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default AddingEventOne;
