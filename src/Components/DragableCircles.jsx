import React, { useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";
import Swal from "sweetalert2";
import BlackCross from "../Assets/BlackCross.svg";
import RedCross from "../Assets/RedCross.svg";
import BlueCross from "../Assets/BlueCross.svg";
import PinkCross from "../Assets/PinkCross.svg";
import YellowCross from "../Assets/YellowCross.svg";

import {
  Main,
  FloatOptions,
  Button,
  Img,
  FloatWindow,
} from "../Styles/DragableCirclesStyles";
import { storeFile, getLocalStorageImage } from "../Services/localStorage";
import { imageZoom } from "../Utils/ImageZoom";

export default function DragableCircles() {
  const coors = { x: 0, y: 0 };
  const [selectedToZoom, setSelectedToZoom] = useState(null);
  const [calculatedValues, setCalculatedValues] = useState(0);
  const [glassValue, setGlassValue] = useState(0);
  const [showActualCircle, setShowActualCircle] = useState([]);

  const getImage = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.addEventListener(
        "load",
        function () {
          storeFile(reader.result);
          window.location.reload(true);
        },
        false
      );
      reader.readAsDataURL(file);
    }
  };

  // Cartão
  const firstConnectionblackBall = useRef(null);
  const firstConnectionRedBall = useRef(null);
  const [firstConnectionMainBall, setFirstConnectionMainBall] = useState(coors);
  const [firstConnectionSecondBall, setFirstConnectionSecondBall] = useState(
    coors
  );
  const [firstConnectionDist, setFirstConnectionDist] = useState(0);

  //Púpila
  const secondConnectionblackBall = useRef(null);
  const secondConnectionBlueBall = useRef(null);
  const secondConnectionYellowBall = useRef(null);
  const [secondConnectionMainBall, setSecondConnectionMainBall] = useState(
    coors
  );
  const [secondConnectionSecondBall, setSecondConnectionSecondBall] = useState(
    coors
  );
  const [secondConnectionYellow, setSecondConnectionYellow] = useState(coors);
  const [secondConnectionDist, setSecondConnectionDist] = useState(0);
  const [noseDist, setNoseDist] = useState(0);

  // Óculos
  const thirdConnectionblackBall = useRef(null);
  const thirdConnectionPinkBall = useRef(null);
  const [thirdConnectionMainBall, setThirdConnectionMainBall] = useState(coors);
  const [thirdConnectionthirdBall, setThirdConnectionthirdBall] = useState(
    coors
  );
  const [thirdConnectionDist, setThirdConnectionDist] = useState();

  useEffect(() => {
    const zoom = () => {
      switch (selectedToZoom) {
        case 1:
          return firstConnectionMainBall;
        case 2:
          return firstConnectionSecondBall;
        case 3:
          return secondConnectionMainBall;
        case 4:
          return secondConnectionSecondBall;
        case 5:
          return thirdConnectionMainBall;
        case 6:
          return thirdConnectionthirdBall;
        case 7:
          return secondConnectionYellow;
        default:
          return;
      }
    };
    imageZoom("myimage", "result", zoom());
  }, [
    firstConnectionDist,
    secondConnectionDist,
    thirdConnectionDist,
    secondConnectionYellow,
  ]);

  useEffect(() => {
    const { x: mainX, y: mainY } = firstConnectionMainBall;
    const { x, y } = firstConnectionSecondBall;

    setFirstConnectionDist(x - mainX + y - mainY);

    if (firstConnectionDist && secondConnectionDist) {
      setCalculatedValues(
        (((54 * secondConnectionDist) / firstConnectionDist) * 0.1).toFixed(2)
      );
    }
  }, [
    firstConnectionMainBall,
    firstConnectionSecondBall,
    firstConnectionDist,
    secondConnectionDist,
    thirdConnectionDist,
  ]);

  useEffect(() => {
    if (firstConnectionDist && thirdConnectionDist) {
      setGlassValue(
        (((54 * thirdConnectionDist) / firstConnectionDist) * 0.1).toFixed(2)
      );
    }
  }, [firstConnectionDist, thirdConnectionDist, secondConnectionYellow]);

  useEffect(() => {
    const { x: mainX, y: mainY } = secondConnectionMainBall;
    const { x, y } = secondConnectionSecondBall;

    setSecondConnectionDist(x - mainX + y - mainY);
  }, [
    secondConnectionMainBall,
    secondConnectionSecondBall,
    secondConnectionDist,
  ]);

  useEffect(() => {
    const { x: mainX, y: mainY } = thirdConnectionMainBall;
    const { x, y } = thirdConnectionthirdBall;

    setThirdConnectionDist(x - mainX + y - mainY);
  }, [thirdConnectionMainBall, thirdConnectionthirdBall, thirdConnectionDist]);

  useEffect(() => {
    const { x, y } = secondConnectionSecondBall;
    const { x: x2, y: y2 } = secondConnectionYellow;

    const value = x2 - x + y2 - y;
    setNoseDist((value * 0.1).toFixed(2));
  }, [secondConnectionSecondBall, secondConnectionYellow]);

  function updateMainBall() {
    setFirstConnectionMainBall(
      firstConnectionblackBall.current.getBoundingClientRect()
    );
    setSecondConnectionMainBall(
      secondConnectionblackBall.current.getBoundingClientRect()
    );
    setThirdConnectionMainBall(
      thirdConnectionblackBall.current.getBoundingClientRect()
    );
  }

  function updateSecondBall() {
    setFirstConnectionSecondBall(
      firstConnectionRedBall.current.getBoundingClientRect()
    );
    setSecondConnectionSecondBall(
      secondConnectionBlueBall.current.getBoundingClientRect()
    );
    setThirdConnectionthirdBall(
      thirdConnectionPinkBall.current.getBoundingClientRect()
    );
    setSecondConnectionYellow(
      secondConnectionYellowBall.current.getBoundingClientRect()
    );
  }

  const showInformations = () => {
    Swal.fire({
      title: "Dados",
      icon: "info",
      html:
        `<span>Valor da pupila: ${calculatedValues}</span>` +
        `<span>Valor óculos: ${glassValue}</span>` +
        `<span>Valor nariz: ${noseDist}</span>`,
      showCloseButton: true,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i>',
    });
  };

  const showLines = (event, id) => {
    if (event) {
      setShowActualCircle((oldArray) => [...oldArray, id]);
    } else if (showActualCircle.includes(id)) {
      setShowActualCircle((oldArray) => oldArray.filter((e) => e !== id));
    } else {
      setShowActualCircle([]);
    }
  };

  return (
    <Main>
      <svg>
        {firstConnectionMainBall.x !== 0 && !showActualCircle.includes(1) && (
          <line
            x1={firstConnectionMainBall.x + 11}
            y1={firstConnectionMainBall.y + 11}
            x2={firstConnectionSecondBall.x + 11}
            y2={firstConnectionSecondBall.y + 11}
            stroke="rgb(255,0,0)"
          />
        )}
        {secondConnectionMainBall.x !== 0 && !showActualCircle.includes(2) && (
          <line
            x1={secondConnectionMainBall.x + 11}
            y1={secondConnectionMainBall.y + 11}
            x2={secondConnectionSecondBall.x + 11}
            y2={secondConnectionSecondBall.y + 11}
            stroke="blue"
          />
        )}
        {thirdConnectionMainBall.x !== 0 && !showActualCircle.includes(3) && (
          <line
            x1={thirdConnectionMainBall.x + 11}
            y1={thirdConnectionMainBall.y + 11}
            x2={thirdConnectionthirdBall.x + 11}
            y2={thirdConnectionthirdBall.y + 11}
            stroke="#ff0fcf"
          />
        )}
        {secondConnectionYellow.x !== 0 && !showActualCircle.includes(4) && (
          <line
            x1={secondConnectionYellow.x + 11}
            y1={secondConnectionYellow.y + 11}
            x2={secondConnectionSecondBall.x + 11}
            y2={secondConnectionSecondBall.y + 11}
            stroke="green"
          />
        )}
      </svg>
      <Img id="myimage" src={getLocalStorageImage()} alt="background" />
      <FloatOptions>
        <div className="float-container">
          <div className="all-circles-box">
            <div className="drag-container">
              <Draggable
                onStart={updateMainBall}
                onDrag={updateMainBall}
                onStop={() => setSelectedToZoom(null)}
                onMouseDown={() => setSelectedToZoom(1)}
              >
                <div
                  className={`black-circle ${
                    showActualCircle.includes(1) && "show-circle"
                  }`}
                >
                  <img
                    draggable="false"
                    src={BlackCross}
                    ref={firstConnectionblackBall}
                    alt="img"
                  />
                </div>
              </Draggable>
              <Draggable
                onStart={updateSecondBall}
                onDrag={updateSecondBall}
                onStop={() => setSelectedToZoom(null)}
                onMouseDown={() => setSelectedToZoom(2)}
              >
                <div
                  className={`red-circle ${
                    showActualCircle.includes(1) && "show-circle"
                  }`}
                >
                  <img
                    draggable="false"
                    ref={firstConnectionRedBall}
                    src={RedCross}
                    alt="img"
                  />
                </div>
              </Draggable>
              <span className="first">Cartão</span>
              <input
                type="checkbox"
                onChange={(e) => showLines(e.target.checked, 1)}
              />
            </div>

            <div className="drag-container">
              <Draggable
                onStart={updateMainBall}
                onDrag={updateMainBall}
                onStop={() => setSelectedToZoom(null)}
                onMouseDown={() => setSelectedToZoom(3)}
              >
                <div
                  className={`black-circle ${
                    showActualCircle.includes(2) && "show-circle"
                  }`}
                >
                  <img
                    draggable="false"
                    ref={secondConnectionblackBall}
                    src={BlackCross}
                    alt="img"
                  />
                </div>
              </Draggable>
              <Draggable
                onStart={updateSecondBall}
                onDrag={updateSecondBall}
                onStop={() => setSelectedToZoom(null)}
                onMouseDown={() => setSelectedToZoom(4)}
              >
                <div
                  className={`blue-circle ${
                    showActualCircle.includes(2) && "show-circle"
                  }`}
                >
                  <img
                    draggable="false"
                    ref={secondConnectionBlueBall}
                    src={BlueCross}
                    alt="img"
                  />
                </div>
              </Draggable>
              <span className="second">Pupila</span>
              <input
                type="checkbox"
                onChange={(e) => showLines(e.target.checked, 2)}
              />
            </div>
            <div className="drag-container">
              <Draggable
                onStart={updateMainBall}
                onDrag={updateMainBall}
                onStop={() => setSelectedToZoom(null)}
                onMouseDown={() => setSelectedToZoom(5)}
              >
                <div
                  className={`black-circle ${
                    showActualCircle.includes(3) && "show-circle"
                  }`}
                >
                  <img
                    draggable="false"
                    ref={thirdConnectionblackBall}
                    src={BlackCross}
                    alt="img"
                  />
                </div>
              </Draggable>
              <Draggable
                onStart={updateSecondBall}
                onDrag={updateSecondBall}
                onStop={() => setSelectedToZoom(null)}
                onMouseDown={() => setSelectedToZoom(6)}
              >
                <div
                  className={`pink-circle ${
                    showActualCircle.includes(3) && "show-circle"
                  }`}
                >
                  <img
                    draggable="false"
                    ref={thirdConnectionPinkBall}
                    src={PinkCross}
                    alt="img"
                  />
                </div>
              </Draggable>
              <span className="third">Óculos</span>
              <input
                type="checkbox"
                onChange={(e) => showLines(e.target.checked, 3)}
              />
            </div>

            <div className="drag-container">
              <Draggable
                onStart={updateSecondBall}
                onDrag={updateSecondBall}
                onStop={() => setSelectedToZoom(null)}
                onMouseDown={() => setSelectedToZoom(7)}
              >
                <div
                  className={`blue-circle ${
                    showActualCircle.includes(4) && "show-circle"
                  }`}
                >
                  <img
                    draggable="false"
                    ref={secondConnectionYellowBall}
                    src={YellowCross}
                    alt="img"
                  />
                </div>
              </Draggable>
              <span className="green">Nariz</span>
              <input
                type="checkbox"
                onChange={(e) => showLines(e.target.checked, 4)}
              />
            </div>

            <div className="input-container">
              <input
                id="icon-button-file"
                type="file"
                onChange={(e) => getImage(e.target.files[0])}
              />
              <label className="first-label" htmlFor="icon-button-file">
                <span className="input-btn">Trocar imagem</span>
              </label>
            </div>
          </div>
          <div className="final-value">
            <span>Valor da pupila: {calculatedValues}</span>
            <span>Valor óculos: {glassValue}</span>
            <span>Valor nariz: {noseDist}</span>
          </div>
        </div>
        <Button onClick={showInformations}>
          <i className="fas fa-bars" />
        </Button>
        <label className="first-label" htmlFor="icon-button-file">
          <span className="input-icon">
            <i className="fas fa-camera"></i>
          </span>
        </label>
      </FloatOptions>
      {selectedToZoom && (
        <FloatWindow className="img-zoom-lens" id="result">
          <div className="zoom-circle" />
        </FloatWindow>
      )}
    </Main>
  );
}
