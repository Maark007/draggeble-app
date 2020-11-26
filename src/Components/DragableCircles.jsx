import React, { useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";
import Swal from "sweetalert2";
import axios from "axios";

import {
  Main,
  FloatOptions,
  Button,
  Img,
  Circle,
} from "../Styles/DragableCirclesStyles";
import { storeFile, getLocalStorageImage } from "../Services/localStorage";

export default function DragableCircles() {
  const coors = { x: 0, y: 0 };
  const [calculatedValues, setCalculatedValues] = useState(0);
  const [glassValue, setGlassValue] = useState(0);
  const [showActualCircle, setShowActualCircle] = useState([]);
  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [dnpDifference, setDnpDifferente] = useState(0);

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
  const [secondConnectionDist, setSecondConnectionDist] = useState(0);

  // Nariz
  const [secondConnectionYellow, setSecondConnectionYellow] = useState(coors);
  const [noseDist, setNoseDist] = useState(0);
  const [nariz, setNariz] = useState(0);

  // Óculos
  const thirdConnectionblackBall = useRef(null);
  const thirdConnectionPinkBall = useRef(null);
  const [thirdConnectionMainBall, setThirdConnectionMainBall] = useState(coors);
  const [thirdConnectionthirdBall, setThirdConnectionthirdBall] = useState(
    coors
  );
  const [thirdConnectionDist, setThirdConnectionDist] = useState();

  const getImage = (file) => {
    const formData = new FormData();
    formData.append("image", file, "image");
    setImage(formData);
  };

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?expiration=600&key=4c9f40434fdc936b5964ba1f1b8c95db`,
        image
      );
      if (res) {
        storeFile(res.data.data.url);
        setImageUrl(res.data.data.url);
        return window.location.reload(true);
      }
    };
    loadData();
  }, [image, imageUrl]);

  const ONE_HOUR_IN_MILISECONDS = 3600000;

  setTimeout(() => {
    const removePicture = localStorage.removeItem("my-image");
    return removePicture;
  }, ONE_HOUR_IN_MILISECONDS);

  useEffect(() => {
    if (image && imageUrl === undefined) {
      return Swal.fire({
        title: "Imagem sendo enviada!",
        html: "Imagens de grandes portes podem demorar alguns minutos.",
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });
    }
  }, [image, imageUrl]);

  // Cartão
  useEffect(() => {
    const { x: mainX, y: mainY } = firstConnectionMainBall;
    const { x, y } = firstConnectionSecondBall;

    const value = x - mainX + y - mainY;
    if (value < 0) {
      setFirstConnectionDist(value * -1);
    } else {
      setFirstConnectionDist(value);
    }
  }, [firstConnectionMainBall, firstConnectionSecondBall]);

  useEffect(() => {
    if (firstConnectionDist && secondConnectionDist) {
      function round(value, step) {
        step || (step = 1.0);
        var inv = 1.0 / step;
        return Math.round(value * inv) / inv;
      }
      const calc =
        ((86 * secondConnectionDist) / firstConnectionDist) * 0.1 * 10;
      setCalculatedValues(round(calc, 0.5));
    }
  }, [firstConnectionDist, secondConnectionDist]);

  /// DP / Pupila
  useEffect(() => {
    const { x: mainX, y: mainY } = secondConnectionMainBall;
    const { x, y } = secondConnectionSecondBall;

    const value = x - mainX + y - mainY;
    if (value < 0) {
      setSecondConnectionDist(value * -1);
    } else {
      setSecondConnectionDist(value);
    }
  }, [secondConnectionMainBall, secondConnectionSecondBall]);

  //// Óculos / Altura
  useEffect(() => {
    const { x: mainX, y: mainY } = thirdConnectionMainBall;
    const { x, y } = thirdConnectionthirdBall;

    const value = x - mainX + y - mainY;
    if (value < 0) {
      setThirdConnectionDist(value * -1);
    } else {
      setThirdConnectionDist(value);
    }
  }, [thirdConnectionMainBall, thirdConnectionthirdBall]);

  useEffect(() => {
    if (firstConnectionDist && thirdConnectionDist) {
      function round(value, step) {
        step || (step = 1.0);
        var inv = 1.0 / step;
        return Math.round(value * inv) / inv;
      }
      const calc =
        ((86 * thirdConnectionDist) / firstConnectionDist) * 0.1 * 10;
      setGlassValue(round(calc, 0.5));
    }
  }, [firstConnectionDist, thirdConnectionDist]);

  /// Nariz / DNP
  useEffect(() => {
    const { x: mainX, y: mainY } = secondConnectionSecondBall;
    const { x, y } = secondConnectionYellow;

    const value = x - mainX + y - mainY;

    if (value < 0) {
      setNoseDist(value * -1);
    } else {
      setNoseDist(value);
    }
  }, [secondConnectionSecondBall, secondConnectionYellow]);

  useEffect(() => {
    if (noseDist && firstConnectionDist) {
      function round(value, step) {
        step || (step = 1.0);
        var inv = 1.0 / step;
        return Math.round(value * inv) / inv;
      }
      const calc = ((86 * noseDist) / firstConnectionDist) * 0.1 * 10;
      setNariz(round(calc, 0.5));
    }
  }, [noseDist, firstConnectionDist]);

  useEffect(() => {
    if (nariz && calculatedValues) {
      const math = calculatedValues - nariz;

      function round(value, step) {
        step || (step = 1.0);
        var inv = 1.0 / step;
        return Math.round(value * inv) / inv;
      }

      if (math < 0) {
        const calc = math * -1;
        setDnpDifferente(round(calc, 0.5));
      } else {
        setDnpDifferente(round(math, 0.5));
      }
    }
  }, [nariz, calculatedValues]);

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
        `<span>DP: ${calculatedValues}</span>` +
        `<span>DNP OD: ${nariz}</span>` +
        `<span>DNP OE: ${dnpDifference}</span>` +
        `<span>Altura: ${glassValue}</span>`,
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
      <Img
        loading="lazy"
        id="myimage"
        src={getLocalStorageImage()}
        alt="background"
      />
      <FloatOptions>
        <div className="float-container">
          <div className="all-circles-box">
            <div className="drag-container">
              <Draggable onStart={updateMainBall} onDrag={updateMainBall}>
                <div
                  className={`black-circle ${
                    showActualCircle.includes(1) && "show-circle"
                  }`}
                >
                  <Circle color="red">
                    <div className="cross-circle">
                      <div
                        className="capture-data"
                        ref={firstConnectionblackBall}
                      />
                    </div>
                  </Circle>
                </div>
              </Draggable>
              <Draggable onStart={updateSecondBall} onDrag={updateSecondBall}>
                <div
                  className={`red-circle ${
                    showActualCircle.includes(1) && "show-circle"
                  }`}
                >
                  <Circle color="red">
                    <div className="cross-circle">
                      <div
                        className="capture-data"
                        ref={firstConnectionRedBall}
                      />
                    </div>
                  </Circle>
                </div>
              </Draggable>
              <span className="first">Cartão</span>
              <input
                type="checkbox"
                onChange={(e) => showLines(e.target.checked, 1)}
              />
            </div>

            <div className="drag-container">
              <Draggable onStart={updateMainBall} onDrag={updateMainBall}>
                <div
                  className={`black-circle ${
                    showActualCircle.includes(2) && "show-circle"
                  }`}
                >
                  <Circle color="blue">
                    <div className="cross-circle">
                      <div
                        className="capture-data"
                        ref={secondConnectionblackBall}
                      />
                    </div>
                  </Circle>

                  <span className="od">OE</span>
                </div>
              </Draggable>
              <Draggable onStart={updateSecondBall} onDrag={updateSecondBall}>
                <div
                  className={`blue-circle ${
                    showActualCircle.includes(2) && "show-circle"
                  }`}
                >
                  <Circle color="blue">
                    <div className="cross-circle">
                      <div
                        className="capture-data"
                        ref={secondConnectionBlueBall}
                      />
                    </div>
                  </Circle>

                  <span className="od">OD</span>
                </div>
              </Draggable>
              <span className="second">DP</span>
              <input
                type="checkbox"
                onChange={(e) => showLines(e.target.checked, 2)}
              />
            </div>
            <div className="drag-container">
              <Draggable onStart={updateSecondBall} onDrag={updateSecondBall}>
                <div
                  className={`blue-circle ${
                    showActualCircle.includes(4) && "show-circle"
                  }`}
                >
                  <Circle color="green">
                    <div className="cross-circle">
                      <div
                        className="capture-data"
                        ref={secondConnectionYellowBall}
                      />
                    </div>
                  </Circle>
                  <span className="od">N</span>
                </div>
              </Draggable>
              <span className="green">DNP</span>
              <input
                type="checkbox"
                onChange={(e) => showLines(e.target.checked, 4)}
              />
            </div>
            <div className="drag-container">
              <Draggable onStart={updateMainBall} onDrag={updateMainBall}>
                <div
                  className={`black-circle ${
                    showActualCircle.includes(3) && "show-circle"
                  }`}
                >
                  <Circle color="#ff0fcf;">
                    <div className="cross-circle">
                      <div
                        className="capture-data"
                        ref={thirdConnectionblackBall}
                      />
                    </div>
                  </Circle>
                </div>
              </Draggable>
              <Draggable onStart={updateSecondBall} onDrag={updateSecondBall}>
                <div
                  className={`pink-circle ${
                    showActualCircle.includes(3) && "show-circle"
                  }`}
                >
                  <Circle color="#ff0fcf;">
                    <div className="cross-circle">
                      <div
                        className="capture-data"
                        ref={thirdConnectionPinkBall}
                      />
                    </div>
                  </Circle>
                </div>
              </Draggable>
              <span className="third">Altura</span>
              <input
                type="checkbox"
                onChange={(e) => showLines(e.target.checked, 3)}
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
            <span>DP: {calculatedValues}</span>
            <span>DNP OD: {nariz}</span>
            <span>DNP OE: {dnpDifference}</span>
            <span>Altura: {glassValue}</span>
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
    </Main>
  );
}
