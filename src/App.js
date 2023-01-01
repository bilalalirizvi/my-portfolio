import React from "react";
import Routing from "./config/Routing";
import Radium, { StyleRoot } from "radium";

const App = () => {
  return (
    <StyleRoot>
      <Routing />
    </StyleRoot>
  );
};

export default Radium(App);
