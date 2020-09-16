export const storeFile = (file) => {
  return localStorage.setItem("my-image", file);
};

export const getLocalStorageImage = () => {
  return localStorage.getItem("my-image");
};

export const isLoggued = () => {
  const key = localStorage.getItem("my-key");
  if (key) {
    return true;
  } else {
    return false;
  }
};
