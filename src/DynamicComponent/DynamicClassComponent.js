import React, { Component } from "react";
class DCStudentData extends Component {
  render() {
    return (
      <div>
        <h1>
          Name : {this.props.name} Roll : {this.props.roll}
          {/* props that are parsed by as component attribute */}
        </h1>
        {this.props.children}
        {/* props that are parsed by the component body */}
      </div>
    );
  }
}
export default DCStudentData;
