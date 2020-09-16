import React, { useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";

import {
  Main,
  FloatOptions,
  NoContentBox,
} from "../Styles/DragableCirclesStyles";
import { storeFile, getLocalStorageImage } from "../Services/localStorage";
import { imageZoom } from "../Utils/ImageZoom";

export default function DragableCircles() {
  const [calculatedValues, setCalculatedValues] = useState(0);
  const [glassValue, setGlassValue] = useState(0);

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

  const firstConnectionblackBall = useRef(null);
  const firstConnectionRedBall = useRef(null);
  const [firstConnectionMainBall, setFirstConnectionMainBall] = useState({
    x: 0,
    y: 0,
  });
  const [firstConnectionSecondBall, setFirstConnectionSecondBall] = useState({
    x: 0,
    y: 0,
  });
  const [firstConnectionDist, setFirstConnectionDist] = useState(0);

  const secondConnectionblackBall = useRef(null);
  const secondConnectionBlueBall = useRef(null);
  const [secondConnectionMainBall, setSecondConnectionMainBall] = useState({
    x: 0,
    y: 0,
  });
  const [secondConnectionSecondBall, setSecondConnectionSecondBall] = useState({
    x: 0,
    y: 0,
  });
  const [secondConnectionDist, setSecondConnectionDist] = useState(0);

  const thirdConnectionblackBall = useRef(null);
  const thirdConnectionPinkBall = useRef(null);
  const [thirdConnectionMainBall, setThirdConnectionMainBall] = useState({
    x: 0,
    y: 0,
  });
  const [thirdConnectionthirdBall, setThirdConnectionthirdBall] = useState({
    x: 0,
    y: 0,
  });
  const [thirdConnectionDist, setThirdConnectionDist] = useState(0);

  useEffect(() => {
    const { x: mainX, y: mainY } = firstConnectionMainBall;
    const { x, y } = firstConnectionSecondBall;

    setFirstConnectionDist(x - mainX + y - mainY);

    if (firstConnectionDist && secondConnectionDist) {
      setCalculatedValues(
        (((54 * secondConnectionDist) / firstConnectionDist) * 0.1).toFixed(2)
      );
    }
    if (firstConnectionDist && thirdConnectionDist) {
      setGlassValue(
        (((54 * thirdConnectionDist) / firstConnectionDist) * 0.1).toFixed(2)
      );
    }
  }, [
    firstConnectionMainBall,
    firstConnectionSecondBall,
    firstConnectionDist,
    secondConnectionDist,
  ]);

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
  }

  useEffect(() => {
    imageZoom("myimg", "myresult");
  });

  return (
    <Main id="myimg">
      <FloatOptions>
        <div className="float-container">
          <div className="drag-container">
            <Draggable
              defaultPosition={{ x: 0, y: 0 }}
              onStart={updateMainBall}
              onDrag={updateMainBall}
              onStop={updateMainBall}
            >
              <div className="black-circle">
                <div
                  className="little-red-box"
                  ref={firstConnectionblackBall}
                />
              </div>
            </Draggable>
            <Draggable
              defaultPosition={{ x: 0, y: 0 }}
              onStart={updateSecondBall}
              onDrag={updateSecondBall}
              onStop={updateSecondBall}
            >
              <div className="red-circle" id="myresult">
                <div ref={firstConnectionRedBall} className="little-red-box" />
              </div>
            </Draggable>
            <span className="first">Cartão</span>
          </div>

          <div className="drag-container">
            <Draggable
              defaultPosition={{ x: 0, y: 0 }}
              onStart={updateMainBall}
              onDrag={updateMainBall}
              onStop={updateMainBall}
            >
              <div className="black-circle">
                <div className="second-box" ref={secondConnectionblackBall} />
              </div>
            </Draggable>
            <Draggable
              defaultPosition={{ x: 0, y: 0 }}
              onStart={updateSecondBall}
              onDrag={updateSecondBall}
              onStop={updateSecondBall}
            >
              <div className="blue-circle">
                <div className="second-box" ref={secondConnectionBlueBall} />
              </div>
            </Draggable>
            <span className="second">Pupila</span>
          </div>

          <div className="drag-container">
            <Draggable
              defaultPosition={{ x: 0, y: 0 }}
              onStart={updateMainBall}
              onDrag={updateMainBall}
              onStop={updateMainBall}
            >
              <div className="black-circle">
                <div className="third-box" ref={thirdConnectionblackBall} />
              </div>
            </Draggable>
            <Draggable
              defaultPosition={{ x: 0, y: 0 }}
              onStart={updateSecondBall}
              onDrag={updateSecondBall}
              onStop={updateSecondBall}
            >
              <div className="pink-circle">
                <div className="third-box" ref={thirdConnectionPinkBall} />
              </div>
            </Draggable>
            <span className="third">Óculos</span>
          </div>

          <div className="final-value">
            <span>Valor da pupila: {calculatedValues}</span>
            <span>Valor óculos: {glassValue}</span>
          </div>
          <div className="input-container">
            <input
              id="icon-button-file"
              type="file"
              onChange={(e) => getImage(e.target.files[0])}
            />
            <label htmlFor="icon-button-file">
              <span className="input-btn">Trocar imagem</span>
            </label>
          </div>
        </div>
      </FloatOptions>
      <svg>
        {firstConnectionSecondBall.x !== 0 && (
          <line
            x1={firstConnectionMainBall.x + 11}
            y1={firstConnectionMainBall.y + 5}
            x2={firstConnectionSecondBall.x}
            y2={firstConnectionSecondBall.y + 5}
            stroke="rgb(255,0,0)"
          />
        )}
        {secondConnectionSecondBall.x !== 0 && (
          <line
            x1={secondConnectionMainBall.x + 11}
            y1={secondConnectionMainBall.y + 5}
            x2={secondConnectionSecondBall.x}
            y2={secondConnectionSecondBall.y + 5}
            stroke="blue"
          />
        )}
        {thirdConnectionthirdBall.x !== 0 && (
          <line
            x1={thirdConnectionMainBall.x + 11}
            y1={thirdConnectionMainBall.y + 5}
            x2={thirdConnectionthirdBall.x}
            y2={thirdConnectionthirdBall.y + 5}
            stroke="#ff0fcf"
          />
        )}
      </svg>
    </Main>
  );
}
