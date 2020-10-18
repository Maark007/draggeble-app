export const storeFile = (file) => {
  try {
    const item = localStorage.setItem("my-image", file);
    return item;
  } catch {
    return alert("Foto de tamanho excessivo, Por favor, selecione outra foto.");
  }
};

export const getLocalStorageImage = () => {
  return localStorage.getItem("my-image");
};

export const isLoggued = () => {
  return localStorage.getItem("my-key");
};
