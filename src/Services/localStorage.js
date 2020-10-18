export const storeFile = (file) => {
  return localStorage.setItem("my-image", file);
};

export const getLocalStorageImage = () => {
  return localStorage.getItem("my-image");
};

export const isLoggued = () => {
  return localStorage.getItem("my-key");
};
