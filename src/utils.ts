const getIdfromURL = (url: string) => {
  let newUrl = url;

  if (url.slice(-1) === "/") {
    newUrl = url.slice(0, -1);
  }

  return newUrl.substring(newUrl.lastIndexOf("/") + 1);
};

export { getIdfromURL };
