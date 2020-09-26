import styled from "styled-components";

export const Main = styled.div`
  height: 100vh;
  width: 100%;
  .black-circle {
    cursor: grab;
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
  }
  .red-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: grab;
    height: 25px;
    width: 25px;
    z-index: 2;
  }
  .blue-circle {
    height: 25px;
    width: 25px;
    cursor: grab;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  .pink-circle {
    height: 25px;
    width: 25px;
    cursor: grab;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  .drag-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .first {
    color: red;
    font-family: sans-serif;
    font-size: 15px;
    width: 100px;
    text-align: center;
  }
  .second {
    color: blue;
    font-family: sans-serif;
    font-size: 15px;
    width: 100px;
    text-align: center;
  }
  .third {
    color: #ff0fcf;
    font-family: sans-serif;
    font-size: 15px;
    width: 100px;
    text-align: center;
  }
  .input-container {
    padding: 10px 5px 10px 5px;
    display: flex;
    align-items: center;
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
    z-index: 2;
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
    .input-icon {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      margin: 17px;
      i {
        font-size: 22px;
        color: royalblue;
      }
    }
    .all-circles-box {
      width: inherit;
      justify-content: space-between;
    }
  }
`;

export const FloatOptions = styled.div`
  height: 100vh;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
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

export const Img = styled.img`
  height: 100vh;
  width: 100%;
  position: absolute;
  object-fit: cover;
`;

export const FloatWindow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  height: 200px;
  width: 200px;
  margin: 10px;
  border-radius: 50%;
`;
