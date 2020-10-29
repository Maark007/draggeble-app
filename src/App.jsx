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


 // useEffect(() => {
  //   const zoom = () => {
  //     switch (selectedToZoom) {
  //       case 1:
  //         return firstConnectionMainBall;
  //       case 2:
  //         return firstConnectionSecondBall;
  //       case 3:
  //         return secondConnectionMainBall;
  //       case 4:
  //         return secondConnectionSecondBall;
  //       case 5:
  //         return thirdConnectionMainBall;
  //       case 6:
  //         return thirdConnectionthirdBall;
  //       case 7:
  //         return secondConnectionYellow;
  //       default:
  //         return;
  //     }
  //   };
  //   imageZoom("myimage", "result", zoom());
  // }, [
  //   firstConnectionDist,
  //   secondConnectionDist,
  //   thirdConnectionDist,
  //   secondConnectionYellow,
  // ]);