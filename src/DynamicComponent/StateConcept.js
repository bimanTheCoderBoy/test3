import React, { Component } from "react";
class StateStuff extends Component {
  // constructor for class stateStuff
  constructor() {
    super();
    // creating states
    this.state = {
      massage: "this will change"
    };
  }
  // change() {
  //   this.setState({
  //     massage: "this is changed"
  //   });
  // }
  render() {
    return (
      <div>
        {this.state.massage}
        <button
          onClick={() => {
            this.setState({ massage: "this is changed" });

            /*setState() is a inbuild method */
          }}
        >
          Change
        </button>
      </div>
    );
  }
}
export default StateStuff;
