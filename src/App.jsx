import React from "react";
import DragableCircles from "./Components/DragableCircles";
import NoContentPage from "./Components/NoContent";

import { getLocalStorageImage, isLoggued } from "./Services/localStorage";

export default function App() {
  return (
    <div className="App">
      {getLocalStorageImage() ? <DragableCircles /> : <NoContentPage/>}
    </div>
  );
}
