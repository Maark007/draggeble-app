import React, { useState, useEffect } from "react";
import Eye from "../Assets/Eye.gif";

import { Main, Background, LoginContent, SelectImage } from "../Styles/Login";
import { keys } from "../Model/Password";
import { toast } from "react-toastify";
import { storeFile, isLoggued } from "../Services/localStorage";

export default function Login() {
  const [userPasssword, setUserPassword] = useState();
  const [refresh, setRefresh] = useState(false);

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
