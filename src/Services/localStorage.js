export const storeFile = (file) => {
  return localStorage.setItem("my-image", file);
};

export const getLocalStorageImage = () => {
  return localStorage.getItem("my-image");
};
