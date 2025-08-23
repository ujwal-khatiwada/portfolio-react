const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/portfolio/": "";
};

export { getImagePrefix };
 