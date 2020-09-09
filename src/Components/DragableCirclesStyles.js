import styled from "styled-components";

import { getLocalStorageImage } from "../Services/localStorage";

export const Main = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${getLocalStorageImage()});
  background-size: cover;
  background-position: center;
  .black-circle {
    height: 35px;
    width: 35px;
    border: 2px solid black;
    border-radius: 50%;
    cursor: grab;
    position: absolute;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .red-circle {
    height: 35px;
    width: 35px;
    border: 2px solid red;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: grab;
  }
  .blue-circle {
    height: 35px;
    width: 35px;
    border: 2px solid royalblue;
    border-radius: 50%;
    cursor: grab;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pink-circle {
    height: 35px;
    width: 35px;
    border: 2px solid #ff0fcf;
    border-radius: 50%;
    cursor: grab;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .drag-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
  }
  .first {
    color: red;
    font-family: sans-serif;
    font-size: 15px;
    width: 100px;
    text-align: center;
  }
  .null-box {
    background: black;
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
  .second {
    color: blue;
    font-family: sans-serif;
    font-size: 15px;
    width: 100px;
    text-align: center;
  }
  .second-box {
    border: 2px solid blue;
    height: 8px;
    width: 8px;
    border-radius: 50%;
  }
  .third {
    color: #ff0fcf;
    font-family: sans-serif;
    font-size: 15px;
    width: 100px;
    text-align: center;
  }
  .third-box {
    border: 2px solid #ff0fcf;
    height: 8px;
    width: 8px;
    border-radius: 50%;
  }
  .input-container {
    padding: 10px 5px 10px 5px;
  }
  .final-value {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 55px;
    padding: 10px;
    width: 200px;
    span {
      font-size: 16px;
      font-family: system-ui;
      text-align: center;
    }
  }
  .input-btn {
    background: #fff;
    border: 1px solid royalblue;
    padding: 5px 10px 5px 10px;
    cursor: pointer;
    border-radius: 4px;
    color: royalblue;
    font-family: sans-serif;
    font-weight: 100;
    transition: all 0.5s ease;
    :hover {
      transition: all 0.5s ease;
      background: royalblue;
      color: #fff;
    }
  }
  @media screen and (max-width: 740px) {
    .final-value {
      height: auto;
      width: auto;
    }
  }
`;

export const FloatOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  height: 100vh;
  width: 100%;
  .float-container {
    display: flex;
    align-items: center;
    background: #fff;
    margin: 18px;
    padding: 5px;
    border-radius: 5px;
  }
  @media screen and (max-width: 740px) {
    justify-content: flex-start;
    align-items: flex-start;
    .float-container {
      flex-direction: column;
      margin: 5px;
    }
  }
`;

export const NoContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  height: 100vh;
  width: 100%;
  h1 {
    font-size: 34px;
    font-weight: 100;
    font-family: "Montserrat", sans-serif;
    text-align: center;
  }
`;
