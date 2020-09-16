import styled from "styled-components";

import { getLocalStorageImage } from "../Services/localStorage";

export const Main = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${getLocalStorageImage()});
  background-size: cover;
  background-position: center;
  position: relative;
  .black-circle {
    height: 35px;
    width: 35px;
    border: 2px solid black;
    border-radius: 50%;
    cursor: grab;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 100;
  }
  .little-red-box {
  border: 2px solid red;
  height: 5px;
  border-radius: 50%;
  width: 5px;
}
  .red-circle {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: grab;
    height: 35px;
    width: 35px;
    border: 2px solid red;
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
    height: 5px;
    width: 5px;
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
    height: 5px;
    width: 5px;
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
      font-family: sans-serif;
      font-size: 18px;
    }
  }
  .all-circles-box {
    display: flex;
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
  .input-icon {
    display: none;
  }
  @media screen and (max-width: 740px) {
    .final-value {
      display: none;
    }
    .input-btn {
      display: none;
    }
    .input-container {
      width: 120px;
    }
    .input-icon {
      display: flex;
      justify-content: center;
      cursor: pointer;
      i {
        font-size: 25px;
        color: royalblue;
      }
    }
    .all-circles-box {
      width: inherit;
      justify-content: space-around;
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
    justify-content: space-between;
    background: #fff;
    width: 95%;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
  }
  @media screen and (max-width: 740px) {
    justify-content: center;
    align-items: flex-end;
  }
`;

export const Button = styled.button`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  margin: 15px;
  cursor: pointer;
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 50%;
  @media screen and (max-width: 740px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
