import React, { Component } from "react";
class JsVsJsx extends Component {
  render() {
    //this is JSX code
    return <h1>hello This is using JSX</h1>;

    //This is JS code
    // return React.createElement("h1", { id: "h11" }, "hello this is using JS");
  }
}
export default JsVsJsx;
// JSX is nothing but a simple from of JS, JSX first convert itself to JS then
// it parse the data to the browser
