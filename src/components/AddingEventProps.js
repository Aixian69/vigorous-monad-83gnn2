import React, { Component } from "react";

class AddingEventProps extends Component {
  handleClick = () => {
    alert(this.props.greeting);
  };

  render() {
    return (
      <div className="child-container">
        <h2>Child Component</h2>
        <button onClick={this.handleClick}>Click to See Greeting</button>
      </div>
    );
  }
}

export default AddingEventProps;
