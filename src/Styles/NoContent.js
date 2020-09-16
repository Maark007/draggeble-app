import styled from "styled-components";

export const NoContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  height: 100vh;
  width: 100%;
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

export const FluxInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  input {
    padding: 10px;
    border-radius: 29px;
    border: 1px solid grey;
  }
  button {
    margin: 10px;
    cursor: pointer;
    width: 97px;
    border: 1px solid #000;
    border-radius: 4px;
    height: 25px;
  }
`;
