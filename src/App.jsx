import React from "react";
import DragableCircles from "./Components/DragableCircles";
import Main from "./Components/Login";

import { getLocalStorageImage, isLoggued } from "./Services/localStorage";

export default function App() {
  return (
    <div className="App">
      {getLocalStorageImage() && isLoggued() ? <DragableCircles /> : <Main />}
    </div>
  );
}
