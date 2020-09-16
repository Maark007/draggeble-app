import React, { useEffect, useState } from "react";
import Eye from "../Assets/Eye.gif";

import { NoContentBox, FluxInput } from "../Styles/NoContent";
import { storeFile, isLoggued } from "../Services/localStorage";
import { keys } from "../Model/Password";
import { toast } from "react-toastify";

export default function NoContentPage() {
  const [userPasssword, setUserPassword] = useState();

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

  const login = () => {
    if (keys.includes(userPasssword)) {
      localStorage.setItem("my-key", userPasssword);
      return window.location.reload(true)
    } else {
      return toast.error("Chave inválida");
    }
  };

  useEffect(() => {
    if (isLoggued()) {
      return toast.success("Bem-vindo, escolha uma foto para começarmos!");
    }
  });

  return (
    <NoContentBox>
      <img draggable="false" height="175" src={Eye} alt="eye-gif" />
      {isLoggued() ? (
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
      ) : (
        <FluxInput>
          <input
            maxLength="6"
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="Inserir chave"
          />
          <button onClick={() => login()}>Login</button>
        </FluxInput>
      )}
    </NoContentBox>
  );
}
