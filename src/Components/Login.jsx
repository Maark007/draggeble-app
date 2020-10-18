import React, { useState, useEffect } from "react";
import Eye from "../Assets/Eye.gif";
import axios from 'axios'

import { Main, Background, LoginContent, SelectImage } from "../Styles/Login";
import { keys } from "../Model/Password";
import { toast } from "react-toastify";
import { storeFile, isLoggued } from "../Services/localStorage";

export default function Login() {
  const [userPasssword, setUserPassword] = useState();
  const [refresh, setRefresh] = useState(false);
  const [image, setImage] = useState(false);

  const login = () => {
    if (keys.includes(userPasssword)) {
      localStorage.setItem("my-key", userPasssword);
      setRefresh(true);
      return toast.success("Bem-vindo, escolha uma foto para começarmos!");
    } else {
      return toast.error("Chave inválida");
    }
  };

  useEffect(() => {
    isLoggued();
  }, [refresh]);

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
      storeFile(res.data.data.url);
      if (res) {
        window.location.reload(true);
      }
    };
    loadData();
  }, [image]);

  return (
    <Main>
      <Background>
        {!isLoggued() ? (
          <LoginContent>
            <img draggable="false" alt="eye" src={Eye} />
            <div className="login-container">
              <input
                onChange={(e) => setUserPassword(e.target.value)}
                placeholder="Digita sua senha"
              />
              <button onClick={login}>LOGIN</button>
            </div>
          </LoginContent>
        ) : (
          <SelectImage>
            <img draggable="false" alt="eye" src={Eye} />
            <div>
              <input
                id="icon-button-file"
                type="file"
                onChange={(e) => getImage(e.target.files[0])}
              />
              <label htmlFor="icon-button-file">
                <span className="input-btn">Adicionar imagem</span>
              </label>
            </div>
          </SelectImage>
        )}
      </Background>
    </Main>
  );
}
