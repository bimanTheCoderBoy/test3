import React from "react";
export default function DStudentData(props) {
  return (
    <div>
      <h1>
        Name : {props.name} Roll : {props.roll}
        {/* props that are parsed by as component attribute */}
      </h1>
      {props.children}
      {/* props that are parsed by the component body */}
    </div>
  );
}
// probs are basically a inBuild object
