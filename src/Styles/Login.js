import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled.div`
  background: linear-gradient(90deg, #0c2646 30%, #204065 90%, #2a5788);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled(motion.div)`
  height: 400px;
  width: 350px;
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  @media screen and (max-width: 650px) {
    width: auto;
    height: auto;
    padding: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
      overflow: auto;
  }
`;

export const LoginContent = styled.div`
  height: inherit;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & img {
    height: 13rem;
  }
  & .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & button {
    margin: 10px;
    width: 230px;
    height: 35px;
    border-radius: 2px;
    cursor: pointer;
    background: royalblue;
    border: none;
    color: #fff;
    font-weight: bold;
  }
  & input {
    width: 220px;
    height: 20px;
    padding: 5px;
    font-size: 14px;
    border-radius: 5px;
    border: 1.2px solid rgba(195, 195, 195);
    transition: all 100ms cubic-bezier(0.685, 0.0473, 0.346, 1) 0ms;
    :focus {
      transition: all 100ms cubic-bezier(0.685, 0.0473, 0.346, 1) 0ms;
      border-color: royalblue;
      box-shadow: 0 0 10px royalblue;
    }
  }

  @media screen and (max-width: 600px) {
    overflow: auto;
  }
`;

export const SelectImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & img {
    height: 18rem;
  }
  & .input-btn {
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
  @media screen and (max-width: 600px) {
    margin-bottom: 30px;
     img {
      height: 13rem;
    }
  }
`;
