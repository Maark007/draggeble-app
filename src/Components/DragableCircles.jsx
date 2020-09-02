import React, { useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";

import { Main, FloatOptions, NoContentBox } from "./DragableCirclesStyles";
import { storeFile, getLocalStorageImage } from "../Services/localStorage";

export default function DragableCircles() {
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

    if (firstConnectionDist >= 0) {
      setFirstConnectionDist(Math.round(Math.sqrt(x - mainX + y - mainY)));
    } else {
      setFirstConnectionDist(Math.round(Math.cbrt(x - mainX + y - mainY)));
    }
  }, [firstConnectionMainBall, firstConnectionSecondBall, firstConnectionDist]);

  useEffect(() => {
    const { x: mainX, y: mainY } = secondConnectionMainBall;
    const { x, y } = secondConnectionSecondBall;

    if (secondConnectionDist >= 0) {
      setSecondConnectionDist(Math.round(Math.sqrt(x - mainX + y - mainY)));
    } else {
      setSecondConnectionDist(Math.round(Math.cbrt(x - mainX + y - mainY)));
    }
  }, [
    secondConnectionMainBall,
    secondConnectionSecondBall,
    secondConnectionDist,
  ]);

  useEffect(() => {
    const { x: mainX, y: mainY } = thirdConnectionMainBall;
    const { x, y } = thirdConnectionthirdBall;

    if (thirdConnectionDist >= 0) {
      setThirdConnectionDist(Math.round(Math.sqrt(x - mainX + y - mainY)));
    } else {
      setThirdConnectionDist(Math.round(Math.cbrt(x - mainX + y - mainY)));
    }
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

  return (
    <Main>
      {getLocalStorageImage() ? (
        <FloatOptions>
          <div className="float-container">
            <div className="drag-container">
              <Draggable
                defaultPosition={{ x: 0, y: 0 }}
                onStart={updateMainBall}
                onDrag={updateMainBall}
                onStop={updateMainBall}
              >
                <div className="black-circle" ref={firstConnectionblackBall}>
                  <div className="first-box" />
                </div>
              </Draggable>
              <Draggable
                defaultPosition={{ x: 0, y: 0 }}
                onStart={updateSecondBall}
                onDrag={updateSecondBall}
                onStop={updateSecondBall}
              >
                <div className="red-circle" ref={firstConnectionRedBall} />
              </Draggable>
              <span className="first">
                Resultado da primeira: {firstConnectionDist}
              </span>
            </div>
            <div className="drag-container">
              <Draggable
                defaultPosition={{ x: 0, y: 0 }}
                onStart={updateMainBall}
                onDrag={updateMainBall}
                onStop={updateMainBall}
              >
                <div className="black-circle" ref={secondConnectionblackBall}>
                  <div className="second-box" />
                </div>
              </Draggable>
              <Draggable
                defaultPosition={{ x: 0, y: 0 }}
                onStart={updateSecondBall}
                onDrag={updateSecondBall}
                onStop={updateSecondBall}
              >
                <div className="blue-circle" ref={secondConnectionBlueBall} />
              </Draggable>
              <span className="second">
                Resultado da segunda: {secondConnectionDist}
              </span>
            </div>
            <div className="drag-container">
              <Draggable
                defaultPosition={{ x: 0, y: 0 }}
                onStart={updateMainBall}
                onDrag={updateMainBall}
                onStop={updateMainBall}
              >
                <div className="black-circle" ref={thirdConnectionblackBall}>
                  <div className="third-box" />
                </div>
              </Draggable>
              <Draggable
                defaultPosition={{ x: 0, y: 0 }}
                onStart={updateSecondBall}
                onDrag={updateSecondBall}
                onStop={updateSecondBall}
              >
                <div className="pink-circle" ref={thirdConnectionPinkBall} />
              </Draggable>
              <span className="third">
                Resultado da Terceira: {thirdConnectionDist}
              </span>
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
      ) : (
        <NoContentBox>
          <h1>Olá, adicione uma imagem para começarmos!</h1>
          <div className="input-container">
            <input
              id="icon-button-file"
              type="file"
              onChange={(e) => getImage(e.target.files[0])}
            />
            <label htmlFor="icon-button-file">
              <span className="input-btn">Adicionar imagem</span>
            </label>
          </div>
        </NoContentBox>
      )}
    </Main>
  );
}
