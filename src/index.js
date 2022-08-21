import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Hello from "./ComponentUsingFunction";
import Hehe from "./ComponentUsingClass";
import JsVsJsx from "./JsVsJsx";
import DStudentData from "./DynamicComponent/DynamicFunctionComponent";
import DCStudentData from "./DynamicComponent/DynamicClassComponent";
import StateStuff from "./DynamicComponent/StateConcept";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DStudentData name="Biman" roll="82">
      {/* this is child Data */}
      <p>hello i am child </p>
    </DStudentData>
    <DCStudentData name="Shuvo" roll="82">
      {/* this is child Data */}
      <p>hello i am child of class component </p>
    </DCStudentData>
    <JsVsJsx />
    <Hello />
    <Hehe />
    <StateStuff m="This will Change"></StateStuff>
  </StrictMode>
);
