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
    background: #000;
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
    border: 1px solid red;
    border-radius: 50%;
    cursor: grab;
  }
  .blue-circle {
    height: 35px;
    width: 35px;
    border: 1px solid royalblue;
    border-radius: 50%;
    cursor: grab;
  }
  .pink-circle {
    height: 35px;
    width: 35px;
    border: 1px solid #ff0fcf;
    border-radius: 50%;
    cursor: grab;
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
  }
  .first-box {
    background: red;
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
  .second {
    color: blue;
    font-family: sans-serif;
    font-size: 15px;
  }
  .second-box {
    background: blue;
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
  .third {
    color: #ff0fcf;
    font-family: sans-serif;
    font-size: 15px;
  }
  .third-box {
    background: #ff0fcf;
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
  .input-container {
    padding: 20px;
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
    justify-content: center;
    align-items: center;
    background: #fff;
    margin: 18px;
    padding: 5px;
    border-radius: 5px;
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
