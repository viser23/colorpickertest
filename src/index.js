import React from "react";
import ReactDOM from "react-dom";
import ColorPicker from "./ColorPicker";

function App() {
  return (
    <div>
      <ColorPicker color="orange" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
